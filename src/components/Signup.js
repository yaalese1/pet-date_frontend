import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import {useState, useContext} from 'react'
import { UserContext } from "../context/user";
import { useNavigate } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';





function Signup ({handleSignupClose}){
    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");
   const [email, setEmail] = useState("");
    const [password, setPassword] = useState("" );
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [age, setAge] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [zip_code, setZip_code] = useState("")
    const [about_me, setAbout_me] =useState("")
    const [pronouns, setPronouns] =useState ("")
    const [seeking_relationship, setSeeking_Relationship] = useState (false)
    const [avatar, setAvatar] = useState([])
  const [isLoading, setIsLoading] = useState(false);
   const {setUser} = useContext(UserContext)
   const navigate = useNavigate()
   const [ errors, setErrors ] = useState(null)

function handleSubmit(e){
  e.preventDefault()

  const data = new FormData();
  data.append("user[avatar]", avatar);
  data.append("user[first_name]", first_name);
  data.append("user[last_name]", last_name);
  data.append("user[email]", email);
  data.append("user[password]" ,password);
  data.append("user[password_confirmation]",passwordConfirmation);
  data.append("user[age]",age);
  data.append("user[city]",city);
  data.append("user[state]",state );
  data.append("user[zip_code]",zip_code );
  data.append("user[about_me]",about_me);
  data.append("user[pronouns]", pronouns);
  data.append("user[seeking_relationship]",seeking_relationship)



  fetch("/signup", {
    method: "POST",
    body: data,
  }).then((r) => {
   
        setIsLoading(false)
        if (r.ok) {
          r.json().then((newdata) => setUser(newdata));
   
          navigate("/Welcome")
        } else {
          r.json().then(newdata=>setErrors(Object.entries(newdata.errors).map(errorArr =>`${errorArr[0]} ${errorArr[1 ]}`)))
        }
        })


}


  function handleEditChange(e){
    const {name, value, type, checked} = e.target
    
    setSeeking_Relationship({...seeking_relationship, [name]: type === "checkbox" ? checked : value})

 }



 return(
   <div> 


   <div className='back-sign'>
    <Form className= "signup-Form"onSubmit={(e) => handleSubmit(e)}> 
       <div className='sign_up_errors'>
              {errors ? errors.map((e) =>
                  <Alert severity="error" >{e}</Alert>) : null}
          </div> 
          <button className='bcksign-btn' onClick={handleSignupClose}>
          ﹤ Back
          </button>

    <div className='sign-form'>
    
      <h1 className="slogan">Where Pet Pal Meets Tinder </h1>
      <h3>Sign Up Below </h3>

    <Row>
   
   
      <Form.Group as={Col}>
        <Form.Label>First Name</Form.Label>
        <Form.Control 
          type="name" 
          placeholder="First Name"
          value={first_name}
          onChange={(e) =>setFirst_name(e.target.value)}
          />
      </Form.Group>
     

      <Form.Group as={Col}>
                <Form.Label>Last Name</Form.Label>
                        <Form.Control type="name" placeholder="Last Name"
                                value={last_name}
                                onChange={(e) =>setLast_name(e.target.value)}
                                />
         </Form.Group>
         </Row>

       

         <Form.Group>
                <Form.Label>Email address</Form.Label>
                   <Form.Control type="email" placeholder="Enter email"
                       value={email}
                       onChange={(e) =>setEmail(e.target.value)} 
                       />
                            <Form.Text className="text-muted">
                               We'll never share your email with anyone else.
                                        </Form.Text>
        </Form.Group>
                <Row>
        <Form.Group as={Col}>
                <Form.Label>Password</Form.Label>
                   <Form.Control type="password" placeholder="Password"
                    value={password}
                    onChange={(e) =>setPassword(e.target.value)} 
                    />
                            <Form.Text className="text-muted">
                                        </Form.Text>
        </Form.Group>
        <Form.Group as={Col} >
                <Form.Label>Password Confirmation </Form.Label>
                   <Form.Control type="password" 
                   placeholder="Password Confirmation"   
                   value={passwordConfirmation}
                   onChange={(e) =>setPasswordConfirmation(e.target.value)} 
                   />
                            <Form.Text className="text-muted">
                                        </Form.Text>
        </Form.Group>
        </Row>
        <br></br>

        <Row>
         <Form.Group as={Col}>
                 <Form.Label>Age</Form.Label>
                    <Form.Control type="age"
                     placeholder="Must Be 18 or Older to pet 😉"  
                     value={age}
                     onChange={(e) =>setAge(e.target.value)}/>
      </Form.Group>
      <Form.Group as={Col} > 
    
        <Form.Label>Pronouns</Form.Label>
             <Form.Control type="pronouns" placeholder='Pronouns'
                 value={pronouns}
                 onChange={(e) =>setPronouns(e.target.value)}  />
      </Form.Group>
      </Row>

  <Row>
      <Form.Group as={Col} >
        <Form.Label>City</Form.Label>
             <Form.Control type="city" placeholder="City"
                 value={city}
                 onChange={(e) =>setCity(e.target.value)}  />
      </Form.Group>
      <Form.Group as={Col} >
        <Form.Label>State</Form.Label>
             <Form.Control type="state" placeholder="State"
                 value={state}
                 onChange={(e) =>setState(e.target.value)}  />
      </Form.Group>

      <Form.Group as={Col} >
        <Form.Label>Zip Code</Form.Label>
             <Form.Control type="zip_code" placeholder="Zip Code"
                 value={zip_code}
                 onChange={(e) =>setZip_code(e.target.value)}  />
      </Form.Group>
      </Row>

      <Form.Group as={Col} >
      <br></br>
        <Form.Label>Tell other users about yourself below </Form.Label>
             <Form.Control type="about_me"
                 value={about_me}
                 onChange={(e) =>setAbout_me(e.target.value)}  />
      </Form.Group>

       <br></br>
      
    

       <Form.Group as={Col}
           className="x" controlId="formBasicCheckbox">
               <p> Are you seeking a Relationship with lenders as well ?</p>
                <Form.Check 
                type="checkbox" 
                    label="yes I am seeking a relationship "
                    checked={seeking_relationship}
                    // value={seeking_relationship}
                    onChange={()=>setSeeking_Relationship((prev)=> !prev)} />


      </Form.Group>
     
      <Form.Group controlId="formFileSm" >
        <Form.Label>Profile Image</Form.Label>
        <Form.Control 
        type="file" 
        size="sm"
        name="avatar"
        
        inputprops={{ accept: "avatar/*" }}
        onChange={(e) => setAvatar(e.target.files[0])} 
        />
      </Form.Group>
   
    
      {/* <Form.Group>
        <Form.Label>Upload Profile Image </Form.Label>
        <Form.Control
        input type="file" 
        
        // value={address}
        // onChange={(e) =>setAddress(e.target.value)}/>
        />
      </Form.Group>  */}
       <br></br>
      <Button 
       type="submit" variant="dark" >
      {isLoading ? "Loading..." : "Sign Up"}

      </Button>





      </div>
      </Form>
      </div>
  
         </div>
 )

}


export default Signup;