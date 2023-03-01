import React ,{ useContext,useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user";
import CloseButton from 'react-bootstrap/CloseButton';




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
          open_to_breeding: petEdit.open_to_breeding,
          active: petEdit.active,
          trained: petEdit.trained,
          alteration: petEdit.alteration,
        
    })
       function handleSubmit(e) {
             e.preventDefault()
             setErrors([])
             console.log(updatedPet)
             fetch('/pets/'+`${pets.id}`, {
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
      <CloseButton  onClick={handleModalClosing} />
        <Form onSubmit={handleSubmit}>  
    
        <h3 className="peteditheader">Edit Your Pet Below </h3>
  
        <Form.Group className='edit-textarea'>
          <Form.Control 
            input= "text"
            name="name" 
            placeholder="Name"
            value={updatedPet.name}
            onChange={handleEditChange}
          />
        </Form.Group>
       
  
        <Form.Group className='edit-textarea'>
         <Form.Control 
            input= "text"
            name="species" 
            placeholder="Species"
            value={updatedPet.species}
            onChange={handleEditChange}
            />
        </Form.Group>
        <Form.Group className='edit-textarea'>
            <Form.Control 
             name="breed" 
            placeholder="Breed"
            value={updatedPet.breed}
            onChange={handleEditChange} />    
        </Form.Group>
  
        <Form.Group className='edit-textarea'>
            <Form.Control 
             name="age" 
            placeholder="Age"
            value={updatedPet.age}
            onChange={handleEditChange} />    
        </Form.Group>

        <Form.Group className='edit-textarea'>
            <Form.Control 
            input= "text"
            name="diet" 
            placeholder="Diet"
            value={updatedPet.diet}
            onChange={handleEditChange} 
            />
        </Form.Group>

        <Form.Group className='edit-textarea'>
            <Form.Control 
                input= "text"
                name="size" 
                placeholder="Size"
                value={updatedPet.size}
                onChange={handleEditChange}
                 />
        </Form.Group>

        <Form.Group className='edit-textarea'>
            <Form.Control 
            input= "text"
            name="mental_disorder" 
            placeholder="Mental Disorder"
            value={updatedPet.mental_disorder}
            onChange={handleEditChange} 
            />
        </Form.Group>
        <Form.Group className='edit-textarea'>
                <Form.Label> Are you open to breeding this pet  ? </Form.Label>
                <Form.Check
                name= 'open_to_breeding'
                type="checkbox" 
                label= "yes"
                checked={updatedPet.open_to_breeding}
                onChange={handleEditChange} />
            </Form.Group>

            <Form.Group className='edit-textarea'>
                <Form.Label> Is your pet active ? </Form.Label>
                <Form.Check
                name= 'active'
                type="checkbox" 
                label= "yes"
                checked={updatedPet.active}
                onChange={handleEditChange} />
            </Form.Group>

            <Form.Group className='edit-textarea'>
                <Form.Label> Is your pet trained ? </Form.Label>
                <Form.Check
                 name="trained"
               type="checkbox" 
                label="yes"
               checked={updatedPet.trained}
                onChange={handleEditChange} />
            </Form.Group>

            <Form.Group className='edit-textarea'>
                <Form.Label> Has your pet undergone alteration? </Form.Label>
                <Form.Check
                 name="alteration"
               type="checkbox" 
                label="yes"
               checked={updatedPet.alteration}
                onChange={handleEditChange} />
            </Form.Group>

         

           
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