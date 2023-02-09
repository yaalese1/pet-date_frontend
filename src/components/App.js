// import { useState, useEffect } from "react";
import NavbarComp from "./NavbarComp";
import Login from "./Login";
import Signup from "./Signup";
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
    <div className="App">
      <UserProvider>
      <NavbarComp/>
      <Routes>

       
      <Route  exact path= "/Login" element = {<Login/>}/>
      <Route  exact path= "/HomePage" element = {<Signup/>}/>
     
     

      </Routes>
      </UserProvider>
      
    </div>
  );
}

export default App;
