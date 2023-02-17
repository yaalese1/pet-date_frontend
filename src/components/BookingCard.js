import React from "react";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import CardGroup from 'react-bootstrap/CardGroup'
import Row from 'react-bootstrap/Row';
import '../Booking.css'

function BookingCard ({  booking}){
    return(
        <div className="bookingcards">
          
      <Card>
   
      <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    
    
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
{/* <ListGroup.Item>{booking.pet}</ListGroup.Item> */}

export default BookingCard;


