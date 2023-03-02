import React,{useState, useContext}from "react";

import Card from 'react-bootstrap/Card';
import { UserContext } from '../context/user'

import '../Booking.css'
import { useNavigate } from "react-router-dom";

function BookingCard ({  userBooking}){
  const [showEditMessage, setShowEditMessage] = useState(false)
  const [showCancelMessage, setShowCancelMessage] = useState(false)
  const {user, setUser} = useContext(UserContext)
  const [ errors, setErrors ] = useState(null)
  const navigate = useNavigate()
  
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

console.log(user.my_bookings)
console.log(user.pet_bookings)



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
       alert("Your date has been Removed ")
    })
}
 console.log(userBooking.start_date)

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
        const updatedBookingInfo = user.userBookings.map((booking)=> booking.id === updatedBooking.id ? updatedBooking: booking)
        const updateBookingForUser= {...user, booking: updatedBookingInfo}
        setUser(updateBookingForUser)
        alert("Your Booking has been updated")
        navigate("/schedule")
                     
      })
    }
  })

}

function handleEditChange(e){
  const{name,value,type,checked} = e.target
  setFormData({...formData, [name]: type === "checkbox" ? checked : value})
}

// MAKE A FORM TO EDIT AND IMPORT THE CALENDER 

 
    return(
        <div className="bookingcards">
          
      <Card>
  
      <Card.Body>
        <div className="edit-del">
          <div >
      <button className="tool-button" onMouseEnter={handleEditButton} onMouseLeave={handleEditButtionExit } >🔧  </button>
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
    
    {/* <ListGroup.Item>{booking.pet}</ListGroup.Item> */}
           {/* <Card style={{ width: '18em' , flex: '1'}}>
      <Card.Body>
            <Card.Title>{booking.date}</Card.Title>
            <Card.Title>{booking.time}</Card.Title>
            <Card.Title><h5>Pet Only Date:</h5>{booking.pet_only ? <>🐩</> : <>❌</>}</Card.Title>
            <ListGroup.Item>
            <h5>Dropoff:</h5>{booking.dropoff_location}</ListGroup.Item>
            <ListGroup.Item>
            <h5>Pickup:</h5>{booking.pickup_location}</ListGroup.Item>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card> */}
        </div>
    )
}


export default BookingCard;


