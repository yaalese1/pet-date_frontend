import React,{useState, useEffect, useContext} from 'react'
import { useNavigate } from "react-router-dom";
import {UserContext} from  "../context/user"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal'
import Calendar from 'react-calendar';
import '../Booking.css';


function OwnersPetsBookingCard({userBooking, myBookings}){
  const {user, setUser} = useContext(UserContext)   
   const [showEditMessage, setShowEditMessage] = useState(false)
  const [showCancelMessage, setShowCancelMessage] = useState(false)
  const [ errors, setErrors ] = useState(null)
  const navigate = useNavigate()
  const  [smShow, setSmShow] = useState(false)
  const [xsShow , setXsShow] = useState()  
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date ())
  
  const [bookingMod, setBookingMod] = useState(false)
  const userStartView = JSON.stringify(startDate)
  const userStartViewFormat = userStartView.slice(1,11)
  const userEndView = JSON.stringify(endDate)
  const userEndViewFormat = userEndView.slice(1,11)
  const[bookings , setBookings] = useState()

  useEffect(() =>{
      fetch('/bookings/').then((resp)=>{
          if(resp.ok){
              resp.json().then((bookingInfo)=>{setBookings(bookingInfo)})
          }

      });
  },[])

 function handleEditButton (){
  setShowEditMessage(true)
 }
 function handleEditButtionExit (){
  setShowEditMessage(false)
 }


 function handleCancelButton(){
  setShowCancelMessage(true)
 }

 function handleCancelButtonExit(){
  setShowCancelMessage(false)
 }

 function changeBackground(e) {
  e.target.style.background = 'red';
}

function handleStartCalendarDisplay(){
  setXsShow(true)
}
function handleEndCalendarDisplay(){
  setSmShow(true)
}

function handleBookingModal (){
  setBookingMod(true)
}
function handleCloseModal(){
  setBookingMod(false)
}



// const bookingId = myBookings.map((myBooking)=>{
//   return myBooking.id})


function handleDeletBookingClick(){

  fetch(`/bookings/${userBooking.id}`, {method: "DELETE",}).then((r) =>{
    if(r.ok){
      const cancelBooking = user?.pet_bookings.filter((booking)=> booking.id !== userBooking.id)
      const updatedUser ={...user, pet_bookings: cancelBooking}

     
       setUser(updatedUser)
      }else{
        console.log(userBooking.id)
          const cancelMyBooking = user.my_bookings.filter((booking)=> 
        
        booking.id  !== userBooking.id)
      
          const otherUserUpdate = {...user, my_bookings:cancelMyBooking }
    
// const cancelBooking = user.bookings.filter((booking)=>  booking.id !==  userBooking.id)
// console.log(cancelBooking)

// const updateUser = {...user, bookings: cancelBooking}

setUser(otherUserUpdate)

      }
       alert("Your date has been Canceled ")

    })
    navigate("/Calendar")
}


const [formData, setFormData] = useState({
  start_data: userBooking.start_date,
  end_date: userBooking.end_date,
  start_time: userBooking.start_time,
  end_time: userBooking.end_time,
  pickup_location: userBooking.pickup_location,
  dropoff_location: userBooking.dropoff_location,
  pet_only: userBooking.pet_only,
  // booking_id: bookings.id

})
console.log(userBooking)


function handleSubmit(e){
  e.preventDefault();
  setErrors([])
  fetch(`/bookings/${userBooking.id}`,{
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  }). then((r)=>{
    if (r.ok){
      r.json().then((updatedBooking)=>{

        const updatedOwnerBookingInfo = user.my_bookings.map((my_booking)=>
          my_booking.id === updatedBooking.id ? updatedBooking:my_booking
        )
        const updatingTheUser={...user,my_bookings: updatedOwnerBookingInfo}
      //  const updatingTheUser = {...user, my_bookings: updatedBooking.my_bookings}
       console.log(updatingTheUser)
        setUser( updatingTheUser)
   
        
        alert("Your Booking has been updated")
        navigate("/PetCalendar")
        
       
      })
    }
  })
  
}




function handleEditChange(e){
  const{name,value,type,checked} = e.target
  setFormData({...formData, [name]: type === "checkbox" ? checked : value})
}
function handleStartDatePicked(startCalendarDate){
  setStartDate(startCalendarDate)
  const startDatePickedToString =JSON.stringify(startCalendarDate);
  const startDateDisplay =  startDatePickedToString.slice(1,11) 
  setFormData({...formData, start_date: startDateDisplay})
}

function handleEndDatePicked(endCalendarDate){
  setEndDate(endCalendarDate)
  
  const endDatePickedToString =JSON.stringify(endCalendarDate);
  const endDateDisplay =  endDatePickedToString.slice(1,11) 
  setFormData({...formData, end_date: endDateDisplay})
  
 }

 return(
        <div className="bookingcards">
          
      <Card>
  
      <Card.Body>
        <div className="edit-del">
          <div >
      <button className="tool-button" onMouseEnter={handleEditButton} onMouseLeave={handleEditButtionExit } onClick={handleBookingModal } >Edit  </button>
      {showEditMessage &&( 
      <div className="tool-message">
       Click to edit your booking
      </div>
       )}
      </div>
      {/* onMouseEnter={handleCancelButton} onMouseLeave={handleCancelButtonExit}  */}
    <button className= 'cancel-button'onMouseOver={changeBackground} onClick={ handleDeletBookingClick}> Cancel </button>
    {showCancelMessage &&( 
      <div>
        Click To Cancel Booking
      </div>
    )}

      </div>
      <Card.Text> Pick up information: {userBooking.start_date} - {userBooking.end_date}</Card.Text>
      <Card.Text> Session Times :{userBooking.start_time} - {userBooking.end_time}</Card.Text>
     
         
      

          <Card.Text> Pet name: {userBooking.pet.name}</Card.Text>
          <Card.Text></Card.Text>

          <Card.Text> 
          Pick Up: {userBooking.pickup_location}
          </Card.Text>
          <Card.Text>
          Dropoff: {userBooking.dropoff_location}
          </Card.Text>
          <Card.Text>
            Will the owner be joining you for a date     </Card.Text>     <p>: {userBooking.pet_only ? <>  💕Yes💕 </> : <> No this will be a pet only date</>}   
            </p>

        </Card.Body> 
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
  

      <Modal
      size="lg"
      show={bookingMod}
      onHide={() => setBookingMod(false)}
      aria-labelledby="example-modal-sizes-title-lg">
        <div className="btnbck-container">
      <button className="bckbooking-btn" onClick={handleCloseModal}> ﹤Back</button> 
        <div className="bookingform-container">
             <Form onSubmit={handleSubmit} >
             
        <h3>Edit your booking below </h3>
            
      <Form.Group  className="2">
        <Form.Label > Start Time</Form.Label>
        <Form.Select  
        name="start_time"
        value={formData.start_time}
        onChange={handleEditChange}>
          <option>12:00 am</option>
          <option>1:00 AM</option>
          <option>2:00 AM</option>
          <option>3:00 AM</option>
          <option>4:00 AM</option>
          <option>5:00 AM</option>
          <option>6:00 AM</option>
          <option>7:00 AM</option>
          <option>8:00 AM</option>
          <option>9:00 AM</option>
          <option>10:00 AM</option>
          <option>11:00 AM</option>
          <option>1:00 PM</option>
          <option>2:00 PM</option>
           <option>3:00 PM</option>
           <option>4:00 PM</option>
           <option>5:00 PM</option>
           <option>6:00 PM</option>
           <option>7:00 PM</option>
           <option>8:00 PM</option>
           <option>9:00 PM</option>
           <option>10:00 PM</option>
           <option>11:00 PM</option>                       
        </Form.Select> 
      </Form.Group>


        <Form.Group>
        <Form.Label> End Time</Form.Label>
        <Form.Select 
            name="end_time"
            value={formData.end_time}
            onChange={handleEditChange}>
          <option>12:00 AM</option>
          <option>1:00 AM</option>
          <option>2:00 AM</option>
          <option>3:00 AM</option>
          <option>4:00 AM</option>
          <option>5:00 AM</option>
          <option>6:00 AM</option>
          <option>7:00 AM</option>
          <option>8:00 AM</option>
          <option>9:00 AM</option>
          <option>10:00 AM</option>
          <option>11:00 AM</option>
          <option>1:00 PM</option>
          <option>2:00 PM</option>
           <option>3:00 PM</option>
           <option>4:00 PM</option>
           <option>5:00 PM</option>
           <option>6:00 PM</option>
           <option>7:00 PM</option>
           <option>8:00 PM</option>
           <option>9:00 PM</option>
           <option>10:00 PM</option>
           <option>11:00 PM</option>                       
        </Form.Select> 
      </Form.Group >
    
    

        <div >
       
          <Form.Group className="pickup-button" >
            <Button className="pickup-button"
            size="sm"
            onClick={handleStartCalendarDisplay} 
            variant="dark"> Pick up date  </Button>
             </Form.Group> 

            <div className="user-start">
            
           <h5 className="user-start"> 
           Pickup date: {userStartViewFormat}
           </h5>
            </div>
   </div>

    <Form.Group   
        name='start_date'
        >
     <Modal

         size="sm"
         show={xsShow}
         onHide={() => setXsShow(false)}
         aria-labelledby="example-modal-sizes-title-sm">  
        <Calendar onChange={ handleStartDatePicked} value={startDate} 
        
        />     
    </Modal>   
    </Form.Group>
        
       <Form.Group 
       name='end-date'>
      </Form.Group >
      <div>
      <Button  className="drop-button"
     
       size="sm" onClick={handleEndCalendarDisplay} variant="dark"> Drop off date </Button>
      <div >
        <h4 className="user-end"> Drop off date: {userEndViewFormat}</h4>
      </div>
      </div> 
      <Modal  size="md"
         show={smShow}
         onHide={() => setSmShow(false)}
         aria-labelledby="example-modal-sizes-title-md">  
      <Calendar onChange={handleEndDatePicked} value={endDate}/>
      </Modal>
   
     
   

      <Row>
      <Form.Group as={Col} className= "pick-location" >
        <Form.Label>Pickup Location</Form.Label>
        <Form.Control 
        name="pickup_location" 
        value={formData.pickup_location}
        onChange={handleEditChange} />
      </Form.Group>
  
      
         <Form.Group as={Col} className= "drop-location">
        <Form.Label>Dropoff Location</Form.Label>
        <Form.Control 
        name="dropoff_location" 
        value={formData.dropoff_location}
        onChange={handleEditChange} />
      </Form.Group>
    </Row>

      <div className='present-box'>
        <Form.Group>
        <Form.Label>
            Would you like the owner to be present for a Date ?
        </Form.Label>
        <Form.Check 
        name="pet_only" 
        type="checkbox" 
        checked={formData.pet_only}
        onChange={handleEditChange}
        />
       </Form.Group>
    </div>

     
      <Button variant="dark" type="submit">
        Submit
      </Button>
    </Form>
   
        </div>
        
        </div>


    </Modal>


        </div>
    )
}




export default OwnersPetsBookingCard
