import React ,{ useContext,useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user";





function PetEditForm({ pets, handleModalClosing}){
    // const {pets , setPets} = useContext(PetContext)
    const {user, setUser} = useContext(UserContext)
   
     const [ errors, setErrors ] = useState(null)
     const navigate = useNavigate()
 
   
    
    
    // console.log(userPet)

    // const handleModalClosing = handleModalClosing
    const petEdit = pets
    // console.log(petEdit)
        const [ updatedPet, setUpdatePet ] = useState({
          
          name: petEdit.name,
          species: petEdit.species,
          breed: petEdit.breed,
          age: petEdit.age,
          diet: petEdit.diet,
          size: petEdit.size,
          mental_disorder: petEdit.mental_disorder,
          state: petEdit.state,
          city: petEdit.city,
          zip_code: petEdit.zip_code,
          open_to_breeding: petEdit.open_to_breeding,
          active: petEdit.active,
          trained: petEdit.trained,
          alteration: petEdit.alteration,

        
    })
    console.log(updatedPet)
       function handleSubmit(e) {
             e.preventDefault()
             setErrors([])
            //  console.log(updatedPet)
             fetch(`/pets/+${pets.id}`, {
                 method: "PATCH",
                 headers: {
                     "Content-Type": "application/json",
                 },
                 body: JSON.stringify(updatedPet),
             }).then((r) => {
                 if (r.ok) {
                     r.json().then((updatedAnimal) => {
                   
console.log(updatedAnimal)
                        const  updatedPetInfo = user.pets.map((pet) => pet.id === updatedAnimal.id ? updatedAnimal: pet)
                        
              
                        const updatedUser = {...user , pets: updatedPetInfo}
                      
                        setUser(updatedUser)
                   
                        
                        //  const updatedPetInfo = user.pets.map((info) => info.id 
                        
                        //  === petEdit.id ? updatedAnimal: info)
                        //  const updatedUser = {...user, petEdit: updatedPetInfo}
                        //  setUser(updatedUser)
                        
                         alert("Your pet has been updated")
                        navigate("/UserProfile")
                     })
                 } else {
                     r.json().then((err) => (setErrors(err.errors)))
                 }
             })
         }

         function handleEditChange(e){
            const {name, value, type, checked} = e.target
            
            setUpdatePet({...updatedPet, [name]: type === "checkbox" ? checked : value})

         }

        




    

// console.log(pets?.id)

    return(
        
        <div className='petedit-form'>
      <button className='edit-bckbtn' onClick={handleModalClosing}> ﹤Back </button>
        <Form onSubmit={handleSubmit}>  
       
        <h3 className="peteditheader">Edit Your Pet's Info Below </h3>
       
        <Row className="row-1">
        <Form.Group as={Col} className= "edit-textarea">
            Name:
          <Form.Control
           
            input= "text"
            name="name" 
            placeholder="Name"
            value={updatedPet.name}
            onChange={handleEditChange}
          />
        </Form.Group>
        
       
  
        <Form.Group as={Col} className= "edit-textarea"  >
            Species:
         <Form.Control 
            
            input= "text"
            name="species" 
            placeholder="Species"
            value={updatedPet.species}
            onChange={handleEditChange}
            />
        </Form.Group>
        </Row>

    <Row className="row-2">
        <Form.Group as={Col} className='edit-textarea'>
            Breed:
            <Form.Control 
             name="breed" 
            placeholder="Breed"
            value={updatedPet.breed}
            onChange={handleEditChange} />    
        </Form.Group>
 
        <Form.Group as={Col} className='edit-textarea'>
            Age:
            <Form.Control
             className='edit-input' 
             name="age" 
            placeholder="Age"
            value={updatedPet.age}
            onChange={handleEditChange} />    
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
            value={updatedPet.diet}
            onChange={handleEditChange} 
            />
        </Form.Group>

        <Form.Group as={Col}  className='edit-textarea'>
            Size:
            <Form.Control 
                className='edit-input'
                input= "text"
                name="size" 
                placeholder="Size"
                value={updatedPet.size}
                onChange={handleEditChange}
                 />
        </Form.Group>
  

        <Form.Group as={Col}  className='edit-textarea'>
            Mental Disorder(s):
            <Form.Control
             className='edit-input' 
            input= "text"
            name="mental_disorder" 
            placeholder="Mental Disorder"
            value={updatedPet.mental_disorder}
            onChange={handleEditChange} 
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
            value={updatedPet.state}
            onChange={handleEditChange} 
            />
        </Form.Group>

        <Form.Group as={Col}  className='edit-textarea'>
            City:
            <Form.Control 
            className='edit-input'
            input= "text"
            name="city" 
            placeholder="City"
            value={updatedPet.city}
            onChange={handleEditChange} 
            />
        </Form.Group>
        <Form.Group as={Col}  className='edit-textarea'>
            Zip Code:
            <Form.Control 
            className='edit-input'
            input= "text"
            name="zip_code" 
            placeholder="Zip Code"
            value={updatedPet.zip_code}
            onChange={handleEditChange} 
            />
        </Form.Group>
        </Row>
        
    <Row> 
    <p className='editcheck-directions'>Uncheck the box for No </p> 
        <Form.Group as={Col}  className='edit-textarea'>
 
                <Form.Label> Are you open to breeding this pet  ? </Form.Label>
                <Form.Check
                name='open_to_breeding'
                type="checkbox" 
                checked={updatedPet.open_to_breeding}
                onChange={handleEditChange} />
                   <p>{updatedPet.open_to_breeding ? 'yes' : 'no'}</p>
            </Form.Group>

            <Form.Group as={Col}  className='edit-textarea'>
                <Form.Label> Is your pet active ? </Form.Label>
                <Form.Check
                name= 'active'
                type="checkbox" 
                checked={updatedPet.active}
                onChange={handleEditChange} />
                 <p>{updatedPet.active ? 'yes' : 'no'}</p>
            </Form.Group>
        </Row>  
        <Row>
            <Form.Group as={Col}  className='edit-textarea'>
                <Form.Label> Is your pet trained ? </Form.Label>
                <Form.Check
                 name="trained"
                 type="checkbox" 
                 checked={updatedPet.trained}
                 onChange={handleEditChange} />
                <p>{updatedPet.trained ? 'yes' : 'no'}</p>
            </Form.Group>

            <Form.Group as={Col}  className='edit-textarea'>
                <Form.Label> Has your pet undergone alteration? </Form.Label>
                <Form.Check
                 name="alteration"
                 type="checkbox" 
                 checked={updatedPet.alteration}
                 onChange={handleEditChange} />
                 <p>{updatedPet.alteration? 'yes' : 'no'}</p>
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
       
 

        </div>


       
    )

}


export default PetEditForm;