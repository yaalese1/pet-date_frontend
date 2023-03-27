import React, {useState,useContext, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import Form from 'react-bootstrap/Form';
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';
import Modal from 'react-bootstrap/Modal'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { UserContext } from '../context/user'
import { useNavigate } from "react-router-dom";


function BookingPetForm({pet, handleBookingFormClosing}){

const [startDate, setStartDate] = useState(new Date())
const [endDate, setEndDate] = useState(new Date ())
const  [smShow, setSmShow] = useState(false)
const [xsShow , setXsShow] = useState()
const {user, setUser} = useContext(UserContext)
const[bookings , setBooking] = useState([])
const userStartView = JSON.stringify(startDate)
const userStartViewFormat = userStartView.slice(1,11)
const userEndView = JSON.stringify(endDate)
const userEndViewFormat = userEndView.slice(1,11)


const [input, setInput] = useState("")

const navigate = useNavigate()


// console.log(value)

function handleStartCalendarDisplay(){
    setXsShow(true)
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



const myBooking = user.my_bookings

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

      const newBookingAdded = [...bookings, myBooking , newBooking]
      const addBookingToUser = {...user, myBooking: newBookingAdded}

        // const newBookingAdded = [...bookings,bookings, newBooking]
        // const addBookingToUser ={...user, bookings: newBookingAdded}
        setUser(addBookingToUser)

        
        alert("Your Date with has been booked,  we will redirect you to  your calendar page  please press ok !")
        navigate("/Calendar")
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

function handleEndDatePicked(endCalendarDate){
 setEndDate(endCalendarDate)
 const endDatePickedToString =JSON.stringify(endCalendarDate);
 const endDateDisplay =  endDatePickedToString.slice(1,11) 
 setFormData({...formData, end_date: endDateDisplay})
 console.log(endDateDisplay)
}


  

    return(
      <div className="btnbck-container">
      <button className="bckbooking-btn" onClick={handleBookingFormClosing}> ﹤Back</button> 
        <div className="bookingform-container">
             <Form onSubmit={handleSubmit} >
              <h3 className="form-petname">Booking form for {pet.name}</h3>
        <p >Fill out the booking form below  </p>
            
      <Form.Group  className="2">
        <Form.Label > Start Time</Form.Label>
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
        onChange={handleChange} />
      </Form.Group>
  
      
         <Form.Group as={Col} className= "drop-location">
        <Form.Label>Dropoff Location</Form.Label>
        <Form.Control 
        name="dropoff_location" 
        value={formData.dropoff_location}
        onChange={handleChange} />
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
        onChange={handleChange}
        />
       </Form.Group>
    </div>

     
      <Button variant="dark" type="submit">
        Submit
      </Button>
    </Form>
   
        </div>
        
        </div>
    )
}

export default BookingPetForm