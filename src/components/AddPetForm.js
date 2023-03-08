import React, {useContext,useState}  from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { UserContext } from "../context/user";
import { useNavigate } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CloseButton from 'react-bootstrap/CloseButton';



function AddPetForm({handlePetAddFormClosing}){

    const {user, setUser} = useContext(UserContext)
//     const [ errors, setErrors ] = useState(null)
    const navigate = useNavigate()
    // const newPet = user.pets
  
  

    const  [formData, setFormData] = useState ({
                name: "",
                age: "",
                species: "",
                breed: "",
                diet: "",
                size: "",
                mental_disorder: "",
                open_to_breeding: false,
                active: (false),
                trained: (false),
                alteration: (false),
                owner_id: user.id
               
            })
// console.log(formData)
      
function handleSubmit(e) {
    e.preventDefault();
    
    fetch("/pets",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })
    .then((r) => r.json())
   
    .then((newPet) => {

  
    const newPetAdded = [...user.pets, newPet]
 

    console.log(newPetAdded)
 
   

    const addPetToUser = {...user, pets: newPetAdded}
    setUser(addPetToUser)
    console.log(addPetToUser)

    alert("Your pet has been Added")
    navigate("/UserProfile")
} ) 
}



    const handleChange = (e) => {
    const { name, value , type , checked } = e.target
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value })

    //if type equal to check box use checked prop if not use value
    }





    return (
        
           <div className='petedit-form'>
      <button className='edit-bckbtn' onClick={handlePetAddFormClosing}> ﹤Back </button>
        <Form onSubmit={handleSubmit}>  
       
        <h3 className="peteditheader">Add A New Pet Below </h3>
       
        <Row className="row-1">
        <Form.Group as={Col} className= "edit-textarea">
            Name:
          <Form.Control
           
            input= "text"
            name="name" 
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>
        
       
  
        <Form.Group as={Col} className= "edit-textarea"  >
            Species:
         <Form.Control 
            
            input= "text"
            name="species" 
            placeholder="Species"
            value={formData.species}
            onChange={handleChange}
            />
        </Form.Group>
        </Row>

    <Row className="row-2">
        <Form.Group as={Col} className='edit-textarea'>
            Breed:
            <Form.Control 
             name="breed" 
            placeholder="Breed"
            value={formData.breed}
            onChange={handleChange} />    
        </Form.Group>
 
        <Form.Group as={Col} className='edit-textarea'>
            Age:
            <Form.Control
             className='edit-input' 
             name="age" 
            placeholder="Age"
            value={formData.age}
            onChange={handleChange} />    
        </Form.Group>
    </Row>
    <Row className='row-3'>
        <Form.Group as={Col}  className='edit-textarea'>
            Diet:
            <Form.Control 
             className='edit-input'
            input= "text"
            name="diet" 
            placeholder="Diet"
            value={formData.diet}
            onChange={handleChange} 
            />
        </Form.Group>

        <Form.Group as={Col}  className='edit-textarea'>
            Size:
            <Form.Control 
                className='edit-input'
                input= "text"
                name="size" 
                placeholder="Size"
                value={formData.size}
                onChange={handleChange}
                 />
        </Form.Group>
  

        <Form.Group as={Col}  className='edit-textarea'>
            Mental Disorder(s):
            <Form.Control
             className='edit-input' 
            input= "text"
            name="mental_disorder" 
            placeholder="Mental Disorder"
            value={formData.mental_disorder}
            onChange={handleChange} 
            />
        </Form.Group>
    </Row>

    <Row className='location'>
        <Form.Group as={Col}  className='edit-textarea'>
            State:
            <Form.Control 
            className='edit-input'
            input= "text"
            name="state" 
            placeholder="state"
            value={formData.state}
            onChange={handleChange} 
            />
        </Form.Group>

        <Form.Group as={Col}  className='edit-textarea'>
            City:
            <Form.Control 
            className='edit-input'
            input= "text"
            name="city" 
            placeholder="City"
            value={formData.city}
            onChange={handleChange} 
            />
        </Form.Group>
        <Form.Group as={Col}  className='edit-textarea'>
            Zip Code:
            <Form.Control 
            className='edit-input'
            input= "text"
            name="zip_code" 
            placeholder="Zip Code"
            value={formData.zip_code}
            onChange={handleChange} 
            />
        </Form.Group>
        </Row>
        
    <Row> 
    <p className='editcheck-directions'>Uncheck the box for No </p> 
        <Form.Group as={Col}  className='edit-textarea'>
 
                <Form.Label> Are you open to breeding this pet  ? </Form.Label>
                <Form.Check
                name= 'open_to_breeding'
                type="checkbox" 
                label= "yes"
                checked={formData.open_to_breeding}
                onChange={handleChange} />
            </Form.Group>

            <Form.Group as={Col}  className='edit-textarea'>
                <Form.Label> Is your pet active ? </Form.Label>
                <Form.Check
                name= 'active'
                type="checkbox" 
                label= "yes"
                checked={formData.active}
                onChange={handleChange} />
            </Form.Group>
        </Row>  
        <Row>
            <Form.Group as={Col}  className='edit-textarea'>
                <Form.Label> Is your pet trained ? </Form.Label>
                <Form.Check
                 name="trained"
               type="checkbox" 
                label="yes"
               checked={formData.trained}
                onChange={handleChange} />
            </Form.Group>

            <Form.Group as={Col}  className='edit-textarea'>
                <Form.Label> Has your pet undergone alteration? </Form.Label>
                <Form.Check
                 name="alteration"
               type="checkbox" 
                label="yes"
               checked={formData.alteration}
                onChange={handleChange} />
            </Form.Group>
        </Row>
         

           
        <div className='edit-textarea'> 
        <Button 
       
         type="submit" 
         variant="dark" >
                save changes
  
        </Button>
        </div>
      
      
        </Form>
       
 

       
  
 
{/* <div className="newpet-formholder">
<CloseButton  onClick={handlePetAddFormClosing} />
    <h3 className="header"> Add Your New Pet Here</h3>
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control 
        name="name" 
        value={formData.name}
        onChange={handleChange}
         />
    </Form.Group>

    <Form.Group className="mb-3">
        <Form.Label>Species</Form.Label>
        <Form.Control 
        name="species" 
        value={formData.species}
        onChange={handleChange}
        />
    </Form.Group>
      
    <Form.Group className="mb-3">
        <Form.Label>Breed</Form.Label>
        <Form.Control 
        name="breed"
        value={formData.breed}
        onChange={handleChange}
     
       />
    </Form.Group>
      
    <Form.Group className="mb-3">
        <Form.Label>Age</Form.Label>
        <Form.Control 
        name="age" 
        value={formData.age}
        onChange={handleChange}
        />
    </Form.Group>
      
    <Form.Group className="mb-3">
        <Form.Label>Diet</Form.Label>
        <Form.Control 
        name="diet"
        value={formData.diet} 
        onChange={handleChange}
        />
    </Form.Group>
      
    <Form.Group className="mb-3">
        <Form.Label>Size</Form.Label>
        <Form.Control 
        name="size" 
        value={formData.size}
        onChange={handleChange}

       />
    </Form.Group>
      
    <Form.Group className="mb-3">
        <Form.Label>Mental Disorder</Form.Label>
        <Form.Control 
        name="mental_disorder" 
        value={formData.mental_disorder}
        onChange={handleChange}
        />
    </Form.Group>

    <Form.Group className="mb-3">
       <Form.Label> Are You Open To Breeding This Pet  ? </Form.Label>
        <Form.Check
         name= "open_to_breeding"
         type="checkbox"
         label= "Yes"
         checked={formData.open_to_breeding}
         onChange={handleChange}
         />
          </Form.Group>

          <Form.Group className="mb-3">
       <Form.Label>Is Your Pet Active ?</Form.Label>
        <Form.Check
         name= "active"
        type="checkbox" 
         label= "Yes"
         checked={formData.active}
         onChange={handleChange}
         />
    </Form.Group>
  
    <Form.Group className="mb-3">
       <Form.Label>Is Your Pet Trained ?</Form.Label>
        <Form.Check
         name= "trained"
        type="checkbox" 
         label= "Yes"
         checked={formData.trained}
         onChange={handleChange}/>
       
    </Form.Group>
      

    <Form.Group className="mb-3">
       <Form.Label>Has your Pet Undergone Alteration ? </Form.Label>
        <Form.Check
         name= "alteration"
        type="checkbox" 
         label= "Yes"
         checked={formData.alteration}
         onChange={handleChange}
         />
    </Form.Group>
      


        <div className="addpetbtn">
         <Button 
         type="submit"
         variant="dark">
            Click to Add pet
         </Button>
        </div>
   
    </Form>
    
 </div> */}
     </div>    

    )
}

export default AddPetForm