import React, { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import {useState, useContext} from 'react'
import { UserContext } from "../context/user";
import { useNavigate } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';







function Settings(){
    
    const {setUser, user} = useContext(UserContext)
    const [first_name, setFirst_name] = useState(user?.first_name);
    const [last_name, setLast_name] = useState(user?.last_name,);
   const [email, setEmail] = useState(user?.email,);
    const [password, setPassword] = useState(user?.password);
    const [passwordConfirmation, setPasswordConfirmation] = useState(user?.password_confirmation);
    const [age, setAge] = useState(user?.age)
    const [city, setCity] = useState(user?.city)
    const [state, setState] = useState(user?.state)
    const [zip_code, setZip_code] = useState(user?.zip_code)

    const [pronouns, setPronouns] =useState (user?.pronouns,)
    const [seeking_relationship, setSeeking_Relationship] = useState (user?.seeking_relationship)
    const [avatar, setAvatar] = useState([])
const [isLoading, setIsLoading] = useState(false);
   const navigate = useNavigate()
   const [ errors, setErrors ] = useState(null)




// const [formData, setFormData] = useState({
//     first_name: user?.first_name,
//     last_name: user?.last_name,
//     email: user?.email,
//     password: user?.password,
//     password_confirmation: user?.password_confirmation,
//     age: user?.age,
//     city: user?.city,
//     state: user?.state,
//     zip_code: user?.zip_code,
//     pronouns: user?.pronouns,
//     seeking_relationship: user?.seeking_relationship




//     // avatar: ""
// })

//unable pass formData to handle submit directly due to user being async so a use effect with dependance array will loop until the the key being fetched is not null and pre populate the form with the orginal value if not changed 

useEffect(()=>{
    
setFirst_name(user?.first_name)
setLast_name(user?.last_name)
setEmail(user?.email)
setPassword(user?.password)
setPasswordConfirmation(user?.password_confirmation)
setAge(user?.age)
setCity(user?.city)
setState(user?.state)
setZip_code(user?.zip_code)
setPronouns(user?.pronouns)
setSeeking_Relationship(user?.seeking_relationship)
},[user])






function handleEditChange(e){
    console.log('yaya')
    const {name, value, type, checked} = e.target
    
    setSeeking_Relationship({...seeking_relationship, [name]: type === "checkbox" ? checked : value})

 }

function handleSubmit(e){
    e.preventDefault()
    
    const updateData = new FormData();
    // updateData.append("user[avatar]", avatar);
    updateData.append("user[first_name]",first_name);
    updateData.append("user[last_name]", last_name);
    updateData.append("user[email]", email);
    updateData.append("user[password]" ,password);
    updateData .append("user[password_confirmation]",passwordConfirmation);
    updateData.append("user[age]",age);
    updateData.append("user[city]",city);
    updateData.append("user[state]",state );
    updateData.append("user[zip_code]",zip_code );
    updateData.append("user[pronouns]", pronouns);
    updateData.append("user[seeking_relationship]",seeking_relationship)
    
   
console.log(updateData)
  
    fetch("/users/"+`${user.id}`, {
      method: "PATCH",
      body:updateData,
    }).then((r) => {
          setIsLoading(false)
          if (r.ok) {
            r.json().then((newUserData) => {


                const addingUserinfo = {...user,...newUserData}
               
            setUser(addingUserinfo)
        
        });


            navigate("/UserProfile")
          } else {
             r.json().then((err) => (setErrors(err.errors)))
          }
          })
  
  
  }




    return(


        <div className='back-sign'>
    <Form onSubmit={(e) => handleSubmit(e)}> 
       <div className='sign_up_errors'>
              {errors ? errors.map((e) =>
                  <Alert severity="error" >{e}</Alert>) : null}
          </div> 
       

    <div className='sign-form'>
    
      <h1 className="slogan">Where Pet Pal Meets Tinder </h1>
      <h3>Edit Your info Below In Below </h3>

    <Row>
   
   
      <Form.Group as={Col}>
        <Form.Label>First Name</Form.Label>
        <Form.Control 
          type="name" 
        //   placeholder={user?.first_name}
          value={first_name}
          onChange={(e)=>setFirst_name (e.target.value)}
        />
      </Form.Group>
     

      <Form.Group as={Col}>
                <Form.Label>Last Name</Form.Label>
                        <Form.Control type="name" 
                        placeholder={user?.last_name}
                                value={last_name}
                                onChange={(e) =>setLast_name(e.target.value)}
                                />
         </Form.Group>
         </Row>

       

         <Form.Group>
                <Form.Label>Email address</Form.Label>
                   <Form.Control type="email" placeholder={user?.email}
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
                     placeholder={user?.age} 
                      value={age}
                            onChange={(e) =>setAge(e.target.value)}/>
      </Form.Group>
      <Form.Group as={Col} > 
    
        <Form.Label>Pronouns</Form.Label>
             <Form.Control type="pronouns" 
             placeholder={user?.pronouns}
                 value={pronouns}
                    onChange={(e) =>setPronouns(e.target.value)}  />
      </Form.Group>
      </Row>

  <Row>
      <Form.Group as={Col} >
        <Form.Label>City</Form.Label>
             <Form.Control type="city"
                 placeholder={user?.city}
                 value={city}
                    onChange={(e) =>setCity(e.target.value)}  />
      </Form.Group>
      <Form.Group as={Col} >
        <Form.Label>State</Form.Label>
             <Form.Control type="state" 
             placeholder={user?.state}
                 value={state}
                    onChange={(e) =>setState(e.target.value)}  />
      </Form.Group>

      <Form.Group as={Col} >
        <Form.Label>Zip Code</Form.Label>
             <Form.Control type="zip_code" 
             placeholder={user?.zip_code}
                 value={zip_code}
                    onChange={(e) =>setZip_code(e.target.value)}  />
      </Form.Group>
      </Row>

      
      <br></br>
     
       <br></br>
      
    

       <Form.Group as={Col}
           className="x" >
               <p> Are you seeking a Relationship with lenders as well ?</p>
                <Form.Check 
                name="seeking_relationship"
                type="checkbox" 
                label="yes I am seeking a relationship "
                checked={seeking_relationship}
                // name="seeking_relastionship"
                // checked={seeking_relationship}
                  
                        // value={seeking_relationship}
                    onChange={()=>setSeeking_Relationship((prev)=> !prev)} />


      </Form.Group>
{/*      
      <Form.Group controlId="formFileSm" >
        {avatar ? avatar.name : "change"}
        <Form.Label>Profile Image</Form.Label>
        <Form.Control 
        type="file" 
        size="sm"
        name="avatar"
            placeholder={user?.avatar_url}
        inputprops={{ accept: "avatar/*" }}
        onChange={(e) => setAvatar(e.target.files[0])} 
        />
      </Form.Group> */}
   
    
      {/* <Form.Group>
        <Form.Label>Upload Profile Image </Form.Label>
             <Form.Control
           input type="file" 
      
              // value={address}
              // onChange={(e) =>setAddress(e.target.value)}/>
              />
      </Form.Group>  */}
       <br></br>
       <h5>enter! password and password confirmation to save changes</h5>
      <Button 
      
       type="submit" variant="dark" >
 
      {isLoading ? "Loading..." : "Save Changes"}

      </Button>





      </div>
      </Form>
      </div>
    )
}

export default Settings