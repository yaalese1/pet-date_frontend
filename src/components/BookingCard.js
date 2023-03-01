import React,{useState}from "react";

import Card from 'react-bootstrap/Card';

import '../Booking.css'

function BookingCard ({  booking}){
const [showEditMessage, setShowEditMessage] = useState(false)
const [showCancelMessage, setShowCancelMessage] = useState(false)

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






 

 console.log(booking.pet.name)
 console.log(booking.pet.owner_id)
    return(
        <div className="bookingcards">
          
      <Card>
  
      <Card.Body>
        <div className="edit-del">
          <div >
      <button className="tool-button" onMouseEnter={handleEditButton} onMouseLeave={handleEditButtionExit }>🔧  </button>
      {showEditMessage &&( 
      <div className="tool-message">
       Click to edit your booking
      </div>
       )}
      </div>
    <button className= 'cancel-button' onMouseEnter={handleCancelButton} onMouseLeave={handleCancelButtonExit}> ❌</button>
    {showCancelMessage &&( 
      <div>
        Click To Cancel Booking
      </div>
    )}

      </div>
      <Card.Text> Pick up information: {booking.start_date} - {booking.end_date}</Card.Text>
      <Card.Text> Session Times :{booking.start_time} - {booking.end_time}</Card.Text>
     
         
      

          <Card.Text> Pet name: {booking.pet.name}</Card.Text>
          <Card.Text></Card.Text>

          <Card.Text> 
          Pick Up: {booking.pickup_location}
          </Card.Text>
          <Card.Text>
          Dropoff: {booking.dropoff_location}
          </Card.Text>
          <Card.Text>
            Pet Only : {booking.pet_only ? <> 🐩 Yes</> : <> 💓 No</>}   
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


