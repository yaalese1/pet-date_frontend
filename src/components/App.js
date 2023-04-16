import React,{ useState, useEffect} from "react";
import NavbarComp from "./NavbarComp";


import PetsPage from "./PetsPage";
import BookingPage from "./BookingPage"
import UserProfile from "./UserProfile"
import HomePage from "./HomePage"
import Frequently from "./Frequently"
import  LandingPage from "./LandingPage"
import Settings from "./Settings";
// import PetEditForm from "./PetEditForm"

import { UserProvider } from "../context/user";
// import {PetProvider} from "../context/pets"
import {Routes, Route} from "react-router-dom"
import OwnersPetBookings from "./OwnersPetsBookings";

// import { CloseButton } from 'react-bootstrap';
// import "../Login.css"


function App() {
  const [pets, setPets] = useState([])

  useEffect (()=>{
    fetch('/pets')
    .then((resp) => resp.json())
    .then ((petsArray) => setPets(petsArray))

    
},[]) 

  return (
 <div>
    
    <UserProvider>
    
    
 
   

    <NavbarComp/>
    <Routes>

      <Route exact path= "/Dates" element = {<BookingPage pets={pets}/>}/>
      <Route exact path= "/PetCalendar" element = {<OwnersPetBookings/>}/>
      <Route exact path= "/Pets" element = {<PetsPage pets={pets} setPets={ setPets}/>}/>
      <Route exact path= "/UserProfile" element ={<UserProfile/>}/>
      <Route exact path= "/Pet&Date" element ={<HomePage />}/>
      <Route exact path= "/Settings" element ={<Settings/>}/>
      <Route exact path= "/FAQ" element ={<Frequently/>}/>
      <Route exact path = "/Welcome" element = {<LandingPage/>}/>
     
     

    </Routes>
     
    
     </UserProvider>
    
      
  </div>
  );
}

export default App;
