import React ,{ useContext,useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate , useParams} from "react-router-dom";
import { UserContext } from "../context/user";
import {PetContext} from "../context/pets"



function PetEditForm({ pets, handleModalClosing}){
    // const {pets , setPets} = useContext(PetContext)
    const {user, setUser} = useContext(UserContext)
    const { id } = useParams()
     const [ errors, setErrors ] = useState(null)
     const navigate = useNavigate()
 
    
    
    // console.log(userPet)


    const petEdit = pets
    // console.log(petEdit)
        const [ updatedPet, setUpdatePet ] = useState({
          
          name: petEdit.name,
          species: petEdit.species,
          age: petEdit.age,
          mental_disorder: petEdit.mental_disorder,
          active: petEdit.active,
          trained: petEdit.trained,
          diet: petEdit.diet,
          size: petEdit.size
    })
       function handleSubmit(e) {
             e.preventDefault()
             setErrors([])
             console.log(updatedPet)
             fetch('/pets/' + `${pets.id}`, {
                 method: "PATCH",
                 headers: {
                     "Content-Type": "application/json",
                 },
                 body: JSON.stringify(updatedPet),
             }).then((r) => {
                 if (r.ok) {
                     r.json().then((updatedAnimal) => {
                        console.log(updatedAnimal)

                        const  updatedPetInfo = user.pets.map((pet) => pet.id == updatedAnimal.id ? updatedAnimal: pet)
                      
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
            
            setUpdatePet({...updatedPet, [e.target.name] :e.target.value})

         }




    

// console.log(pets?.id)

    return(
        <div>
    
        <Form onSubmit={handleSubmit}>  
    
        <h3 className="peteditheader">Edit Your Pet Below </h3>
  
        <Form.Group>
          <Form.Control 
            input= "text"
            name="name" 
            placeholder="Name"
            value={updatedPet.name}
            onChange={handleEditChange}
          />
        </Form.Group>
       
  
        <Form.Group>
        
         <Form.Control 
            input= "text"
            name="species" 
            placeholder="Species"
            value={updatedPet.species}
            onChange={handleEditChange}
            />
        </Form.Group>
  
           <Form.Group>
                     <Form.Control 
                     name="age" 
                     placeholder="Age"
                     value={updatedPet.age}
                     onChange={handleEditChange} />    
          </Form.Group>
  
            <Form.Group>
                <Form.Control 
                  input= "text"
                name="mental_disorder" 

                placeholder="Mental Disorder"
                value={updatedPet.mental_disorder}
                onChange={handleEditChange} />
            </Form.Group>

            <Form.Group>
                <Form.Label> Is your pet active ? </Form.Label>
                <Form.Check
                input= "text"
               type="checkbox" 
               name= 'active'
               value={updatedPet.active}
                onChange={(e) =>setUpdatePet(true)} />
            </Form.Group>
            <Form.Group>
                <Form.Label> Is your trained ? </Form.Label>
                <Form.Check
                input= "text"
               type="checkbox" 
               name="trained"
               value={updatedPet.trained}
                onChange={handleEditChange} />
            </Form.Group>

            <Form.Group>
                
                <Form.Control 
                  input= "text"
                name="diet" 
                placeholder="Diet"
                value={updatedPet.diet}
                onChange={handleEditChange} />
            </Form.Group>

            <Form.Group>
                <Form.Control 
                  input= "text"
                name="size" 
                placeholder="Size"
                value={updatedPet.size}
                onChange={handleEditChange} />
            </Form.Group>
        
        <Button 
       
         type="submit" 
         variant="dark" >
                save changes
  
        </Button>
       
  
  
  
  
  
        </Form>
        <Button 
        onClick={handleModalClosing}
       type="exit" 
       variant="danger" >
              click to exit

      </Button>
      

        </div>


       
    )

}


export default PetEditForm;