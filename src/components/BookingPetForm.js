import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import Form from 'react-bootstrap/Form';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Modal from 'react-bootstrap/Modal'


function BookingPetForm(){

    const [value, setValue] = useState(new Date())
    const  [smShow, setSmShow] = useState()


const datePickedToString =JSON.stringify(value);

const dateDisplay =  datePickedToString.slice(0,11) 


console.log(dateDisplay )



function handleCalendarDisplay(){
    setSmShow(true)
}


    return(
        <div>
          
             <Form>
      <Form.Group className="mb-3" >
        <Form.Label> Start Time</Form.Label>
        <Form.Select  name="time">
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
        <Form.Group className="mb-3" >
        <Form.Label> End Time</Form.Label>
        <Form.Select  name="time">
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

      <Button onClick={handleCalendarDisplay} variant="dark">Pick up date </Button>
       <Form.Group className="mb-3" >
      <Modal
         size="sm"
         show={smShow}
         onHide={() => setSmShow(false)}
         aria-labelledby="example-modal-sizes-title-sm">
       <Calendar onChange={setValue} value={value}
            />
            </Modal>
      </Form.Group>
        
       <Form.Group className="mb-3" >
      </Form.Group>
      <Button onClick={handleCalendarDisplay} variant="dark"> Drop off date </Button>
      
    <Form.Group/>



      <Form.Group className="mb-3">
        <Form.Label>Pickup Location</Form.Label>
        <Form.Control name="pickup_location"  />
      </Form.Group>
      
         <Form.Group className="mb-3">
        <Form.Label>Dropoff Location</Form.Label>
        <Form.Control name="pickup_location"  />
      </Form.Group>
         <Form.Group className="mb-3"  type="checkbox">
        <Form.Label>Would you like the owner to be present for your session ?</Form.Label>
        <Form.Check name="pet_only"  />
      </Form.Group>
     
      <Button variant="dark" type="submit">
        Submit
      </Button>
    </Form>
   
        </div>
    )
}

export default BookingPetForm