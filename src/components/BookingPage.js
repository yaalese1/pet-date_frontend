import React,{useState, useEffect, useContext} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {UserContext} from  "../context/user"
import BookingCard from "./BookingCard"

import '../Booking.css';



function BookingPage(){

    const {user, setUser} = useContext(UserContext)

    const [petBookingcalender, setPetBookingCalender] = useState(new Date());
    // const [myBookingCalender, setMyBookingCalender] = useState(new Date());
 
    const [petBookings, setPetBookings] = useState([])
    const [myBookings, setMyBookings] = useState([])
const borrower_id = user?.id



useEffect(() => {
setPetBookings(user?.pet_bookings)
// setMyBookings(user?.my_bookings)
}, [user])



const displayMyDatesWithOtherPetsBooking = petBookings?.filter((booking)=> {
     
        const day = parseInt(booking.start_date.slice(8))
        const month = parseInt(booking.start_date.slice(5, 7)) -1
        const year = parseInt(booking.start_date.slice(0, 4))
        const dayTwo = parseInt(booking.end_date.slice(8))
        const monthTwo = parseInt(booking.start_date.slice(5,7)) -1
        const yearTwo = parseInt(booking.start_date.slice(0,4))
        const date = new Date(year, month, day, dayTwo, monthTwo, yearTwo)

        return date.toDateString() === petBookingcalender.toDateString()
    })

   
       
    const eachMyDatesWithOtherPetBooking = displayMyDatesWithOtherPetsBooking?.map((booking)=>{
       
        return(
            <BookingCard
            key={booking.id}
            userBooking={booking}
            id= {booking.id}
         />
        )
   

    })
    // const eachMyPetBooking = displayMyPetBooking?.map((ownerBooking)=>{
    //     return(
    //         <OwnersPetBookingCard
    //         key={ownerBooking.id}
    //         userBooking={ownerBooking}/>
    //     )
    // })
// const [whichCalender, setWhichCalender] = useState ({})

// const calenderChosen =()=>{
//     if(eachMyDatesWithOtherPetBooking){
//         return <Calendar onChange={setPetBookingCalender} value={petBookingcalender}
//         />
//     }else{calenderChosen=(eachMyPetBooking);{
//             return(
//                 <Calendar onChange={myBookingCalender} value={setMyBookingCalender}/>
//             )
       
//       }
//     }

    
// }

return(
       
<div className='pet-headcontainer'>
    <h2 className='pet-dateheader'>Click a day to see info on dates with other pets and their owners </h2>
        <div className='bookingpage'>
        
           <div className='calender-contain'>
                <Calendar onChange={setPetBookingCalender} value={petBookingcalender} 
                />
                {eachMyDatesWithOtherPetBooking}
          </div>
        </div>
        </div>
    )
}

export default BookingPage;