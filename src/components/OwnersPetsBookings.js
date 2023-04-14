import React,{useState, useEffect, useContext} from 'react'
import {UserContext} from  "../context/user"
import Calendar from 'react-calendar';
import '../Booking.css';
import OwnersPetsBookingCard from "./OwnersPetsBookingCard";



function OwnersPetsBookings(){

    const {user, setUser} = useContext(UserContext)
    const [myBookingCalender, setMyBookingCalender] = useState(new Date());
    const [myBookings, setMyBookings] = useState([])
   

    useEffect(() => {
    setMyBookings(user?.my_bookings)
    },[user])




       const displayMyPetBooking = myBookings?.filter((ownerBooking)=>{
     
    
        const day = parseInt(ownerBooking.start_date.slice(8))
        const month = parseInt(ownerBooking.start_date.slice(5, 7)) -1
        const year = parseInt(ownerBooking.start_date.slice(0, 4))
        const dayTwo = parseInt(ownerBooking.end_date.slice(8))
        const monthTwo = parseInt(ownerBooking.start_date.slice(5,7)) -1
        const yearTwo = parseInt(ownerBooking.start_date.slice(0,4))
        const date = new Date(year, month, day, dayTwo, monthTwo, yearTwo)
        
        return date.toDateString() === myBookingCalender.toDateString()
    })
        const eachMyPetBooking = displayMyPetBooking?.map((ownerBooking)=>{
        return(
            <OwnersPetsBookingCard
            key={ownerBooking.id}
            userBooking={ownerBooking}
            myBookings={myBookings}
            
            />
        )
        

    })
    return(
        <div className='bookingpage'>
            { eachMyPetBooking }
          <Calendar onChange={setMyBookingCalender} value ={myBookingCalender}/>
        </div>
    )
}

export default OwnersPetsBookings