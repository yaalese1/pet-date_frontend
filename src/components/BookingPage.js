import React,{useState, useEffect, useContext} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {UserContext} from  "../context/user"
import BookingCard from "./BookingCard"
import '../Booking.css';



function BookingPage(){

const {user, setUser} = useContext(UserContext)

    const [calender, setCalender] = useState(new Date());
    const[bookings , setBooking] = useState([])

    useEffect(() =>{
        fetch('/bookings'). then((resp)=>{
            if(resp.ok){
                resp.json().then((bookingInfo)=>{setBooking(bookingInfo)})
            }

        });
    },[])


    

    const displayBooking = bookings.filter((booking)=> {
        const day = parseInt(booking.date.slice(8))
        const month = parseInt(booking.date.slice(5, 7)) - 1
        const year = parseInt(booking.date.slice(0, 4))
        const date = new Date(year, month, day)
        console.log(date.toDateString())
    console.log(calender.toDateString())
        return date.toDateString() === calender.toDateString()
    }  )
   
console.log(displayBooking)


// console.log(user)
//     const userDates = user?.my_bookings
//  console.log(userDates)
   
   

    // console.log(user)



    function handleGettingDates(){
           bookings.forEach(event =>{
           
            const from = new Date(event.date) 
           
            const to = new Date (event.date)
           
    }) 

    // ** MAP TO LOOK AT AFTER FETCHING 
    }

//   console.log (bookings)

    
    // const parseEvents = bookings.map(event =>{
    //         console.log(event)
    //         const from = new Date(event.date) 
    //         const to = new Date (event.date)
    // })

    // console.log(parseEvents)

      
    
    
        // const bookings = userDates.map(booking=> console.log(booking.my_bookings))

        // const desiredOutput = user && userDates.map(
        //     ({events}) => 
        //     Object.entries(events).filter(
        //         ([key,{value}]) =>
        //         key.startsWith('date')
        //     )
        //     .map(([key,{value}]) => value)
        // )
        // .flat();

        // console.log(desiredOutput)
        
    const eachBooking = displayBooking.map((booking)=>{
        return(
            <BookingCard
            key={booking.id}
            booking={booking}
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
        //    onClickDay={handleGettingDates} 
            /> 

          
        </div>
    )
}

export default BookingPage;