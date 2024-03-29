import React,{useState, useContext, useEffect}from "react";

import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

import { UserContext } from '../context/user'

import '../Booking.css'
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Calendar from 'react-calendar';
import ListGroup from 'react-bootstrap/ListGroup';

import 'react-calendar/dist/Calendar.css';
import Modal from 'react-bootstrap/Modal'
import { ListItem } from "@mui/material";


function BookingCard ({  userBooking, pets}){
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
  const[petBookings , setPetBookings] = useState()
  const [booking, setBooking] = useState({})



  useEffect(() =>{
    fetch('/bookings/').then((resp)=>{
        if(resp.ok){
            resp.json().then((bookingInfo)=>{setPetBookings(bookingInfo)})
        }

    });
},[])


console.log(userBooking.avatar_for_lender)




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



function handleDeletBookingClick(){

  fetch(`/bookings/${userBooking.id}`, {method: "DELETE",}).then((r) =>{
    if(r.ok){
      const cancelBooking = petBookings.filter((petBooking)=> petBooking.id !== userBooking.id)

      console.log(cancelBooking)
      const updatedUser ={...petBookings,bookings: cancelBooking}
     
   console.log(updatedUser) 

 const updateAllPetBookings = user?.pet_bookings.map((petBooking)=>petBooking.id === updatedUser.id ? updatedUser : petBooking)
      
   


setUser(updateAllPetBookings)

      }
       alert("Your date has been Canceled ")
       navigate("/Dates")
    })
  
}


const [formData, setFormData] = useState({
  start_data: userBooking.start_date,
  end_date: userBooking.end_date,
  start_time: userBooking.start_time,
  end_time: userBooking.end_time,
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
        const updatedPetBookingInfo = user.pet_bookings?.map((pet_booking)=> 
        pet_booking.id === updatedBooking.id ? updatedBooking: pet_booking)
       
      
   
        
        const updateBookingForUser= {...user,pet_bookings:updatedPetBookingInfo }
        console.log(updateBookingForUser)
        setUser( updateBookingForUser)
   
        
        alert("Your Booking has been updated")
        navigate("/Dates")
        
       
      })
    }
  })
  
}
// useEffect



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



const infoForEachPet = pets.filter((pet)=>{
  if (pet.id == userBooking.pet.id )

  return pet

 

})
const petImage = infoForEachPet.map((petInfo)=>{
return petInfo.image_url
 
    
  
})


// const ownerImg = infoForEachPet.map((ownerInfo)=>{
//   return ownerInfo.owner.avatar_url
// })


// useEffect(() =>{
//   fetch('/users').then((resp)=>{
//       if(resp.ok){
//           resp.json().then((userArray)=>{setAllUsers(userArray)})
//       }

//   });
// },[])
// console.log(allUsers)



// const infoForEachOwner = allUsers.filter((users)=>{
//   if (users.id == userBooking.borrower_id)
//   return users
// })

// const userImg = infoForEachOwner.map((userInfo)=>{
//   return userInfo.avatar_url
// })



// const infoForEachOwner = user?.filter((eachUser)=>{
//   if (eachUser.id == userBooking.owner_id)
//   return eachUser
// })
console.log(userBooking)

 
    return(
<div className="bookingcards">   
<Row> 
<Col xs>
{/* <Row xxl={2} md={1} className="g-4">
       {Array.from({ length: 1}).map((_, idx) => ( 
       <Row key={idx}>   */}   
  <Table>
      <Card>
        <Card.Body>
        <ListGroup className="list-group-flush">
          <div className="edit-del">
             <div>
              <button className="tool-button" 
              onMouseEnter ={handleEditButton} 
              onMouseLeave={handleEditButtionExit } 
              onClick={handleBookingModal }>
              Edit  
              </button >
                {showEditMessage &&( 
              <div className="tool-message">
                Click to edit your booking
              </div>
                )}
              </div> 
                       {handleCancelButton} 
                       {handleCancelButtonExit}  
              <button className= 'cancel-button'
                onMouseOver={changeBackground} 
                onClick={ handleDeletBookingClick}> 
                Cancel 
              </button>
              {showCancelMessage &&( 
              <div>
                 Click To Cancel Booking
              </div>
                  )}
          </div>
        
          <th className="info-sections">
                {/* <ListGroup.Item> */}
            <thead>
              <th>  
                <h5 className="pickup-header">Pickup Info</h5>
                <Card.Text>  {userBooking.start_date}</Card.Text>
                <Card.Text> {userBooking.start_time} </Card.Text>
                <Card.Text> Location: {userBooking.pickup_location}</Card.Text>
              </th>
              <span class="divider"/> 
              <th>
                <h5 className="dropoff-header">Dropoff info</h5>
                <Card.Text>{userBooking.end_date}</Card.Text>
                <Card.Text>{userBooking.end_time}</Card.Text>
                <Card.Text> Location: {userBooking.dropoff_location}</Card.Text>
              </th>
            </thead>
          </th>
        <ListGroup.Item>  </ListGroup.Item>
        <h5 className="date-detailhead"> Pet Details</h5>
        <Card.Img variant="top" src={petImage} />
        <Card.Text>Pet Name: {userBooking.pet.name}</Card.Text> 
        <Card.Text>Species: {userBooking.pet.species}</Card.Text>
        <Card.Text>Size: {userBooking.pet.size}</Card.Text>
        <Card.Text>Diet: {userBooking.pet.diet}</Card.Text>
        <Card.Text>Is this pet trained: {userBooking.pet.trained ? <> yes  </>
        : <>No</>} </Card.Text>
        <Card.Text>Active: {userBooking.pet.active ? <>Yes</> : <>No</>}</Card.Text>
        <Card.Text>Mental Disorders: {userBooking.pet.mental_disorder ? <>{userBooking.pet.mental_disorder}</> : <>No</>}</Card.Text>
           <ListGroup.Item>  </ListGroup.Item>
           <h5 className="date-detailhead">Date Details</h5>
          <Card.Text>Will the owner be joining you for a date? </Card.Text>     
        <p> 
          {userBooking.pet_only ? <>  Yes </> : <> No this will be a pet only date</>}   
        </p>
           <Card.Text> Pet owners name : {userBooking.lender.first_name}</Card.Text>
           <Card.Text>  Owners pronouns : {userBooking.lender.pronouns}</Card.Text>
           <Card.Img variant="top" src={userBooking.avatar_for_lender} />
        </ListGroup>
     
        </Card.Body> 
        </Card>
  </Table> 
  </Col>
  </Row>
      {/* ))}
    </Row>  */}

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


export default BookingCard;



