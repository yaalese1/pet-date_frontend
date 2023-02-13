// import { useState, useEffect } from "react";
import NavbarComp from "./NavbarComp";
import Login from "./Login";
import Signup from "./Signup";
import PetsPage from "./PetsPage";
import UserProfile from "./UserProfile"
import { UserProvider } from "../context/user";
import {Routes, Route} from "react-router-dom"

function App() {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

 

  return (
    <div>
      <UserProvider>
      <NavbarComp/>
      <Routes>

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
