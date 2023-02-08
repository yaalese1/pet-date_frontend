import { useState, useEffect } from "react";
import NavbarComp from "./NavbarComp";
import Login from "./Login";
import { UserProvider } from "../context/user";
function App() {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

  return (
    <div className="App">
      <NavbarComp />
      <UserProvider>
      <Login/>
      </UserProvider>
    </div>
  );
}

export default App;
