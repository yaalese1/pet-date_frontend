import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState, useContext} from 'react'
import { UserContext } from "../context/user";




function Signup (){
    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    // const [avatar, setAvatar] = useState ({})
    const [age, setAge] = useState("")
    const [address, setAddress] = useState("")
    const [seeking_relationship, setSeeking_Relationship] = useState (false)
//    const [errors, setErrors] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const {setUser} = useContext(UserContext)


    function handleUserSubmit(e) {
      e.preventDefault();
      setIsLoading(true)
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
            
          first_name,
          last_name,
          email,
          password,
          passwordConfirmation,
          age,
          address,
          seeking_relationship,
            ),
      }).then((r) => {
        setIsLoading(false)
        if (r.ok) {
          r.json().then((user) => setUser(user));
        }
      });
    }


    // setUser(user)






 return(
    <Form onSubmit={handleUserSubmit}>  
    
      {/* <h3 className="slogan">Where tinder meets pet pal </h3>
      <h1>Sign Up Below </h1>

      <Form.Group>
        <Form.Label>First Name</Form.Label>
        <Form.Control 
          type="name" 
          placeholder="First Name"
          value={first_name}
          onChange={(e) =>setFirst_name(e.target.value)}
        />
      </Form.Group>
     

      <Form.Group>
                <Form.Label>Last Name</Form.Label>
                        <Form.Control type="name" placeholder="Last Name"
                                value={last_name}
                                onChange={(e) =>setLast_name(e.target.value)}/>
         </Form.Group>

         <Form.Group>
                <Form.Label>Email address</Form.Label>
                   <Form.Control type="email" placeholder="Enter email"
                       value={email}
                          onChange={(e) =>setEmail(e.target.value)} />
                            <Form.Text className="text-muted">
                               We'll never share your email with anyone else.
                                        </Form.Text>
        </Form.Group>

        <Form.Group >
                <Form.Label>Password</Form.Label>
                   <Form.Control type="password" placeholder="Password"
                       value={password}
                         onChange={(e) =>setPassword(e.target.value)} />
                            <Form.Text className="text-muted">
                                        </Form.Text>
        </Form.Group>
        <Form.Group >
                <Form.Label>Password Confirmation </Form.Label>
                   <Form.Control type="password" 
                   placeholder="Password Confirmation"   
                       value={passwordConfirmation}
                         onChange={(e) =>setPasswordConfirmation(e.target.value)} />
                            <Form.Text className="text-muted">
                                        </Form.Text>
        </Form.Group>

        <Form.Group>
                 <Form.Label>Age</Form.Label>
                    <Form.Control type="age"
                     placeholder="Must Be 18 or Older to pet 😉"  
                        value={age}
                            onChange={(e) =>setAge(e.target.value)}/>
      </Form.Group>


    <Form.Group>
        <Form.Label>Address</Form.Label>
             <Form.Control type="address" placeholder="Address"
                 value={address}
                    onChange={(e) =>setAddress(e.target.value)}  />
      </Form.Group>

       
       <Form.Group 
           className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" 
                    label="Seeking Relationship"
                        value={seeking_relationship}
                            onChange={(e) =>setSeeking_Relationship(true)} />
      </Form.Group>
      
      <Button 
       type="submit" variant="primary" >
      {isLoading ? "Loading..." : "Sign Up"}

      </Button> */}





      </Form>
 )

}


export default Signup;