import React, {useState,useContext, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import Form from 'react-bootstrap/Form';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Modal from 'react-bootstrap/Modal'
import { UserContext } from '../context/user'
import { useNavigate } from "react-router-dom";


function BookingPetForm({pet}){

const [startDate, setStartDate] = useState(new Date())
const [endDate, setEndDate] = useState(new Date ())
const  [smShow, setSmShow] = useState()
const {user, setUser} = useContext(UserContext)
const[bookings , setBooking] = useState([])


const [input, setInput] = useState("")

const navigate = useNavigate()


// console.log(value)

function handleStartCalendarDisplay(){
    setSmShow(true)
}

function handleEndCalendarDisplay(){
    setSmShow(true)
}


// console.log(pet.owner_id)

useEffect(() =>{
    fetch('/bookings').then((resp)=>{
        if(resp.ok){
            resp.json().then((bookingInfo)=>{setBooking(bookingInfo)})
        }

    });
},[])



const [formData, setFormData] = useState({
    start_date: new Date(),
    end_date: new Date (),
    start_time: "",
    end_time: "",
    pickup_location: "",
    dropoff_location: "",
    pet_only: false,
    pet_id: pet.id,
    borrower_id: user?.id,
    lender_id: pet.owner_id
  })

  function handleSubmit(e){
    e.preventDefault();
    fetch('/bookings',{
        method: "POST",
        headers: {
            "Content-Type": "application/json", 
        },
        body: JSON.stringify(formData),
    })
    .then((r)=> r.json())
    .then((newBooking)=>{

        const newBookingAdded = [...bookings,bookings, newBooking]
        const addBookingToUser ={...user, bookings: newBookingAdded}
        setUser(addBookingToUser)

        
        alert("Your pet has been Added")
        navigate("/schedule")
    })
  }


  const handleChange = (e) =>{
    const {name, value, type ,checked} = e.target 
    setFormData({...formData, [name]: type === "checkbox" ? checked : value })
}

function handleStartDatePicked(startCalendarDate){
    setStartDate(startCalendarDate)
    const startDatePickedToString =JSON.stringify(startCalendarDate);
    const startDateDisplay =  startDatePickedToString.slice(1,11) 
    setFormData({...formData, start_date: startDateDisplay})

   
//     const{value, dateDisplay} = e.target
//    setStartDate({...value, [value]: dateDisplay})
 
}

// function handleEndDatePicked(endCalendarDate){
//  setEndDate(endCalendarDate)
//  const endDatePickedToString =JSON.stringify(endCalendarDate);
//  const endDateDisplay =  endDatePickedToString.slice(1,11) 
//  setFormData({...formData, end_date: endDateDisplay})
// }


    

    return(
        <div className="mb-3">
          
             <Form onSubmit={handleSubmit}className="booking-form">
      <Form.Group>
        <Form.Label> Start Time</Form.Label>
        <Form.Select  
        name="start_time"
        value={formData.start_time}
        onChange={handleChange}>
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
            onChange={handleChange}>
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
        </div>

    <Form.Group  
        name='start_date'
      
        // value={formData.start_date}
        // onChange={handleStartDatepicked}>  
        >
     <Modal
         size="sm"
         show={smShow}
         onHide={() => setSmShow(false)}
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
      </div> 
      <Modal  size="sm"
         show={smShow}
         onHide={() => setSmShow(false)}
         aria-labelledby="example-modal-sizes-title-sm">  
      {/* <Calendar onChange={handleEndDatePicked} value={endDate}/> */}
      </Modal>
    <Form.Group/>


    <div className= "pick-location">
      <Form.Group >
        <Form.Label>Pickup Location</Form.Label>
        <Form.Control 
        name="pickup_location" 
        value={formData.pickup_location}
        onChange={handleChange} />
      </Form.Group>
    </div>
      
         <Form.Group>
        <Form.Label>Dropoff Location</Form.Label>
        <Form.Control 
        name="dropoff_location" 
        value={formData.dropoff_location}
        onChange={handleChange} />
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
        onChange={handleChange}
        />
       </Form.Group>
    </div>

     
      <Button variant="dark" type="submit">
        Submit
      </Button>
    </Form>
   
        </div>
    )
}

export default BookingPetForm