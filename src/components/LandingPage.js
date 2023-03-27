import React,{useContext}from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { UserContext } from "../context/user";
import { useNavigate } from "react-router-dom";

function LandingPage(){
    const {user} = useContext(UserContext)
    const navigate = useNavigate()



    function handleWelcomeNav(){
        navigate("/Pets")
    }
    console.log(user)
    return(
        <div className="welcome-card">
         <Card className="welcome-text">
      <Card.Header></Card.Header>
      <Card.Body>
        <Card.Title>Welcome  </Card.Title>
        <Card.Title className="users-firstname">{user?.first_name} </Card.Title>
        <Card.Title>Pet & Date </Card.Title>
        <Card.Text className="welcome-msg">
         Hello , welcome To Pet & Date. To get started  you can click the button below  and take a look at all our various pets provided to us by our awsome lenders. You can also click the profile link in the Nav  Bar  above to add your own pets as well .  Any questions check out the FAQ link. 
        </Card.Text>
        <Button onClick={handleWelcomeNav} variant="dark"> Click to book a pet! </Button>
      </Card.Body>
     
    </Card>
        </div>
    )

}


export default LandingPage