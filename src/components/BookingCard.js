import React,{useState, useContext}from "react";

import Card from 'react-bootstrap/Card';
import { UserContext } from '../context/user'

import '../Booking.css'
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import Form from 'react-bootstrap/Form';
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';
import Modal from 'react-bootstrap/Modal'


function BookingCard ({  userBooking}){
  const [showEditMessage, setShowEditMessage] = useState(false)
  const [showCancelMessage, setShowCancelMessage] = useState(false)
  const {user, setUser} = useContext(UserContext)
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

// console.log(user.my_bookings)
// console.log(user.pet_bookings)




function handleDeletBookingClick(){

  fetch(`/bookings/${userBooking.id}`, {method: "DELETE",}).then((r) =>{
    if(r.ok){
      const cancelBooking = user?.pet_bookings.filter((booking)=> booking.id !== userBooking.id)
      const updatedUser ={...user, pet_bookings: cancelBooking}
       setUser(updatedUser)
      }else{
          const cancelMyBooking = user.my_bookings.filter((booking)=> booking.id !== userBooking.id)
          const otherUserUpdate ={...user, my_bookings:cancelMyBooking }
          setUser(otherUserUpdate)

      }
       alert("Your date has been Canceled ")

    })
    navigate("/Schedule")
}


const [formData, setFormData] = useState({
  start_data: userBooking.start_date,
  end_date: userBooking.end_date,
  start_time: userBooking.start_date,
  end_time: userBooking.end_date,
  pickup_location: userBooking.pickup_location,
  dropoff_location: userBooking.dropoff_location,
  pet_only: userBooking.pet_only,
})
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

        const updatedBookingInfo = user.my_bookings?.map((my_booking)=> 
        my_booking.id === updatedBooking.id ? updatedBooking: my_booking)
      
   
        
        const updateBookingForUser= {...user , my_bookings: updatedBookingInfo}
       
        setUser( updateBookingForUser)
   
        
        alert("Your Booking has been updated")
        navigate("/Schedule")
        
       
      })
    }
  })
  
}




function handleEditChange(e){
  const{name,value,type,checked} = e.target
  setFormData({...formData, [name]: type === "checkbox" ? checked : value})
}
function handleStartDatePicked(startCalendarDate){
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
// MAKE A FORM TO EDIT AND IMPORT THE CALENDER 

 
    return(
        <div className="bookingcards">
          
      <Card>
  
      <Card.Body>
        <div className="edit-del">
          <div >
      <button className="tool-button" onMouseEnter={handleEditButton} onMouseLeave={handleEditButtionExit } onClick={handleBookingModal } >🔧  </button>
      {showEditMessage &&( 
      <div className="tool-message">
       Click to edit your booking
      </div>
       )}
      </div>
      {/* onMouseEnter={handleCancelButton} onMouseLeave={handleCancelButtonExit}  */}
    <button className= 'cancel-button'onMouseOver={changeBackground} onClick={ handleDeletBookingClick}> ❌</button>
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
            Pet Only : {userBooking.pet_only ? <> 🐩 Yes</> : <> 💓 No</>}   
            </Card.Text>

        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
  

      <Modal
      size="sm"
      show={bookingMod}
      onHide={() => setBookingMod(false)}
      aria-labelledby="example-modal-sizes-title-sm">
      <div className="mb-3">
         <CloseButton  onClick={handleCloseModal}/>
             <Form onSubmit={handleSubmit}className="booking-form">
      <Form.Group>
        <Form.Label> Start Time</Form.Label>
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
      </Form.Group>

        <div className="pickup-button">
            <Button 
            onClick={handleStartCalendarDisplay} 
            variant="dark"> Pick up date </Button>
             <p>{ userStartViewFormat }</p>
        </div>

    <Form.Group  
        name='start_date'
      
        // value={formData.start_date}
        // onChange={handleStartDatepicked}>  
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
      </Form.Group>
      <div className="drop-button">
      <Button onClick={handleEndCalendarDisplay} variant="dark"> Drop off date </Button>
      <p>{userEndViewFormat}</p>
      </div> 
      <Modal  size="sm"
         show={smShow}
         onHide={() => setSmShow(false)}
         aria-labelledby="example-modal-sizes-title-sm">  
      <Calendar onChange={handleEndDatePicked} value={endDate}/>
      </Modal>
    <Form.Group/>


    <div className= "pick-location">
      <Form.Group >
        <Form.Label>Pickup Location</Form.Label>
        <Form.Control 
        name="pickup_location" 
        value={formData.pickup_location}
        onChange={handleEditChange} />
      </Form.Group>
    </div>
      
         <Form.Group>
        <Form.Label>Dropoff Location</Form.Label>
        <Form.Control 
        name="dropoff_location" 
        value={formData.dropoff_location}
        onChange={handleEditChange} />
      </Form.Group>

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

    </Modal>


        </div>
    )
}


export default BookingCard;


