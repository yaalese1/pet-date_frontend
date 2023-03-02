import React, { useState, useContext }  from "react";
import { UserContext } from "../context/user";
import '../UserProfile.css'
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import PetEditForm from "./PetEditForm"
import Modal from 'react-bootstrap/Modal';





function UserPetCard ({userPet}){
     const navigate = useNavigate()
     const {user, setUser} = useContext(UserContext)
   
   
     const [smShow, setSmShow] = useState(false);
     const [ errors, setErrors ] = useState([])
// console.log(userPet)


function handlePetEdit(){
    // navigate(`/PetEditForm/${userPet.id}`)
    // console.log(userPet.id) 
    setSmShow(true)
  }

  function handleModalClosing (){
     setSmShow(() => setSmShow(false))     
 }   

  console.log(userPet) 
  

function handleUserPetDelete(){
    setErrors(null)

    fetch(`/pets/${userPet.id}`,{method:"DELETE",}).then((r)=> {
        if(r.ok){
          
            const userPetUpdatedArray = user.userPet?.filter((pet)=> pet.id !== userPet.id)  
            const userPetUpdate = {...user, userPet:userPetUpdatedArray }
        
            setUser(userPetUpdate)
            

        }else{
            r.json().then((err) => (setErrors(err.errors)))
        }
        alert("Your pet has been Removed please refresh to see your updated profile")
            navigate("/UserProfile")
    })
}

     
  




    return (

         <div >
            
            <div >
                <img className ='userpet-cardImage' 
                src ='http://cdn.akc.org/content/hero/cute_puppies_hero.jpg' alt ="avatar"/>

            </div>
          <div className="UserInfo">
            <div className="line-item">
                <h3>name:</h3>
                <p>{userPet.name}</p> 
           </div>
           <div className="line-item">
                <h3>species:</h3>
               <p>{userPet.species}</p> 
           </div>
           <div className="line-item">
                <h3>breed:</h3>
               <p>{userPet.breed}</p> 
           </div>
           <div className="line-item">
                <h3>size:</h3>
               <p>{userPet.size}</p> 
           </div>
           <div className="line-item">
                <h3>age:</h3>
               <p>{userPet.age}</p> 
           </div>
           <div className="line-item">
                <h3>breed:</h3>
               <p>{userPet.diet}</p> 
           </div>
           <div className= "petbutton-container">
               <Button onClick={handlePetEdit} 
                    variant="dark">click to Edit

               </Button>
               
               </div>
      
     </div>
                      
           <Modal
     
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
        >
              
          <PetEditForm 
           pets={userPet}
           handleModalClosing={handleModalClosing}
           />
          
           </Modal>
           <div>
           <Button 
           onClick={handleUserPetDelete}
          variant="dark"> click to remove </Button>
               </div>
        </div>
    )
}


export default UserPetCard;