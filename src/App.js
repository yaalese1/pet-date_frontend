import { useState, useEffect } from "react";
import  NavbarComp from "./ NavbarComp";
function App() {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

  return (
    <div className="App">
      < NavbarComp/>

     
    </div>
  );
}

export default App;
