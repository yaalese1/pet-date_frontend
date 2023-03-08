import React, { useState, useContext } from 'react'
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import { UserContext } from "../context/user";
import { useNavigate } from "react-router-dom";
import "../Login.css"
import { CloseButton } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

  function Login ({ handleClose}){
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userAvatar, setUserAvatar] = useState({})
    const {user, setUser} = useContext(UserContext)
    const [isLoading, setIsLoading] = useState(false);
function handleBack (){
  // navigate("/Home")
  
}
    function handleSubmit(e) {
      e.preventDefault();
      setIsLoading(true)
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password} ),
      }).then((r) => {
        setIsLoading(false)
        if (r.ok) {
         
          r.json().then ((user) => setUser(user));
          navigate("/UserProfile")
         
        }
      });
    }


    
    return (
<div className='bck-container'>
    <button  className='bck-btn' onClick={handleClose}> 
      ﹤ Back
      </button>
      
        <div className='login-form' >
      

        <Form onSubmit ={handleSubmit}>
            <h1 className='login-header'>Login</h1>
        <Row>
          <Form.Group as={Col} >
              <Form.Label>
                Email address
              </Form.Label>
              <Form.Control className='email-control'
                type="email" 
                placeholder="Enter email" 
                value= {email} 
                onChange= {(e)=> setEmail(e.target.value)} 
              />
              <Form.Text 
                className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
        </Form.Group>
  
        <Form.Group as={Col}className="Password" >
          <Form.Label>Password</Form.Label>
          <Form.Control className='password-control' type="password" placeholder="Password" value= {password} onChange= {(e)=> setPassword(e.target.value)} />
        </Form.Group>

          </Row>
        <Form.Group className='rem' >
          <Form.Check 
           type="checkbox" 
           label="Remember me" />
        </Form.Group>
        <Button variant="dark" type="submit">
        login
        </Button>
      
       
      </Form>
     
      </div>  
  
      </div>

    )
   

    }
export default Login;
