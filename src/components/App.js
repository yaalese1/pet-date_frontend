import { useState} from "react";
import NavbarComp from "./NavbarComp";


import PetsPage from "./PetsPage";
import BookingPage from "./BookingPage"
import UserProfile from "./UserProfile"
import HomePage from "./HomePage"
import Frequently from "./Frequently"
// import PetEditForm from "./PetEditForm"

import { UserProvider } from "../context/user";
import {PetProvider} from "../context/pets"
import {Routes, Route} from "react-router-dom"

import { CloseButton } from 'react-bootstrap';
// import "../Login.css"


function App() {


  return (
    <div>
      <UserProvider>
    
 
   

      <NavbarComp/>
      <Routes>

      <Route exact path= "/Calendar" element = {<BookingPage/>}/>
      <Route exact path= "/Pets" element = {<PetsPage/>}/>
      <Route exact path= "/UserProfile" element ={<UserProfile/>}/>
      <Route exact path= "/Home" element ={<HomePage />}/>
     
      <Route exact path= "/FAQ" element ={<Frequently/>}/>
     
     

      </Routes>
     
    
      </UserProvider>
    
      
    </div>
  );
}

export default App;
