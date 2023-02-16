// import { useState, useEffect } from "react";
import NavbarComp from "./NavbarComp";
import Login from "./Login";
import Signup from "./Signup";
import PetsPage from "./PetsPage";
import BookingPage from "./BookingPage"
import UserProfile from "./UserProfile"
import { UserProvider } from "../context/user";
import {Routes, Route} from "react-router-dom"

function App() {


 

  return (
    <div>
      <UserProvider>
      <NavbarComp/>
      <Routes>

      <Route exact path= "/BookingPet" element = {<BookingPage/>}/>
      <Route exact path= "/Pets" element = {<PetsPage/>}/>
      <Route exact path= "/Login" element = {<Login/>}/>
      <Route exact path= "/HomePage" element = {<Signup/>}/>
      <Route exact path= "/UserProfile" element ={<UserProfile/>}/>
     

      </Routes>
      </UserProvider>
      
    </div>
  );
}

export default App;
