import React, {useContext,useState}  from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { UserContext } from "../context/user";
import { useNavigate } from "react-router-dom";



function AddPetForm(){

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
    // console.log(addPetToUser)

    alert("Your pet has been Removed please refresh to see your updated profile")
    navigate("/UserProfile")
} ) 
}



const handleChange = (e) => {
    const { name, value , type , checked } = e.target
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value })

    //if type equal to check box use shecked prop if not use value
  }





    return (
<div className="newpet-formholder">
    hello
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
       <Form.Label>Is Your Pet Trained ?</Form.Label>
        <Form.Check
         name= "trained"
        type="checkbox" 
         label= "Yes"
         checked={formData.trained}
         onChange={handleChange}/>
       
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
       <Form.Label>Has your Pet Undergone Alteration ? </Form.Label>
        <Form.Check
         name= "alteration"
        type="checkbox" 
         label= "Yes"
         checked={formData.alteration}
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

        <div className="addpetbtn">
         <Button 
         type="submit"
         variant="dark">
            Click to Add pet
         </Button>
        </div>
   
    </Form>
    
 </div>
        

    )
}

export default AddPetForm