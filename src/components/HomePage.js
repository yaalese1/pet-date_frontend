import { useState} from "react";

import Login from "./Login";
import Signup from "./Signup";
import Modal from "react-bootstrap/Modal"
// import { Link } from "react-router-dom";

import '../HomePage.css'
import Button from 'react-bootstrap/Button';



function HomePage(){


    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignupModal, setShowSignupModal] = useState(false)

    const handleLoginClose = () => setShowLoginModal(false);
    const handleLoginShow = () => setShowLoginModal(true);

    const handleSignupClose = () => setShowSignupModal(false)
    const handleSignupShow = () => setShowSignupModal(true);

    document.body.style.backgroundImage = "url(https://media.giphy.com/media/12pJ8OxSWwO86Y/giphy.gif)"
    document.body.backgroundRepeat = "no-repeat"
    document.body.style.backgroundSize = "cover"

    return(
    <div className='homepage'>
        <div className="homepagecard">
            <p className='hometext'>Welcome to Pet & Date 
            this is an app for Pet lovers looking for love. 😍
            We are not limited to only finding you love ,
            you are welcome to borrowing and lending a domestic Animal of your choosing.  </p> 
            <div className="lglink">
                <div className='homebttn'>
                 <div className="logbtn" >
                     <Button  onClick={handleLoginShow}variant="dark">Login</Button> 
                    
                 </div>
                 <div className="signbtn">
                <Button  onClick={handleSignupShow}variant="dark">Signup</Button>
                </div>
               </div>
            </div>
        </div>
        <Modal 
    

    size="lg"
      show={showLoginModal}
      onHide={ handleLoginClose}
      
      backdrop="static"
       aria-labelledby="contained-modal-title-vcenter"
      centered>
    <Login handleClose={handleLoginClose} />
         </Modal>

    <Modal 
    size="lg"
      show={showSignupModal}
      onHide={  handleSignupClose }
      
      backdrop="static"
       aria-labelledby="contained-modal-title-vcenter"
      centered>
   <Signup handleSignupClose={ handleSignupClose }/>
   </Modal>
    </div>
    )
}


export default HomePage