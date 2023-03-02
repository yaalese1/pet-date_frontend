import React,{useState, useEffect, useContext} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {UserContext} from  "../context/user"
import BookingCard from "./BookingCard"
import '../Booking.css';



function BookingPage(){

// const {user, setUser} = useContext(UserContext)

    const [calender, setCalender] = useState(new Date());
    const[bookings , setBooking] = useState([])

    useEffect(() =>{
        fetch('/bookings').then((resp)=>{
            if(resp.ok){
                resp.json().then((bookingInfo)=>{setBooking(bookingInfo)})
            }

        });
    },[])


    

    const displayBooking = bookings.filter((booking)=> {
        const day = parseInt(booking.start_date.slice(8))
        const month = parseInt(booking.start_date.slice(5, 7)) -1
        const year = parseInt(booking.start_date.slice(0, 4))
        const dayTwo = parseInt(booking.end_date.slice(8))
        const monthTwo = parseInt(booking.start_date.slice(5,7)) -1
        const yearTwo = parseInt(booking.start_date.slice(0,4))
        const date = new Date(year, month, day, dayTwo, monthTwo, yearTwo)
        console.log(date.toDateString())
    // console.log(calender.toDateString())
        return date.toDateString() === calender.toDateString()
    }  )
   
console.log(displayBooking)


   

    // console.log(user)




        
    const eachBooking = displayBooking.map((booking)=>{
        return(
            <BookingCard
            key={booking.id}
            userBooking={booking}
            id= {booking.id}/>
        )

    })
//    console.log(calender)

    return(
        <div className='bookingpage'>

            <div>
                
            {eachBooking}
                
          
         
             </div>   
            
           <Calendar onChange={setCalender} value={calender}
        
            /> 

          
        </div>
    )
}

export default BookingPage;