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
     const[showPetDetail, setShowPetDetail] = useState(false)
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

 const handlePetInfoModalClosing = () => setShowPetDetail(false)
  

const handleDisplayPetInfoShowing = () => setShowPetDetail(true)



function handleUserPetDelete(){
    setErrors(null)

    fetch(`/pets/${userPet.id}`,{method:"DELETE",}).then((r)=> {
        if(r.ok){
          
            const userPetUpdatedArray = user.pets?.filter((pet)=> pet.id !== userPet.id)  
            const userPetUpdate = {...user, pets:userPetUpdatedArray }
              
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
                <p className= "pet-intro">
                 Hello, my name is {userPet.name}.
                 Click the info button to 
                 know more about me !</p> 
            </div>
    <div >

            <Modal 

            size="sm"
            show={showPetDetail}
            onHide={() =>setShowPetDetail(false)}
            aria-labelledby="example-modal-sizes-title-sm"
            >
         
            <div className="line-item">
                <h3>Name:</h3>
                <p>{userPet.name}</p> 
           </div>
           <div className="line-item">
                <h3>Species:</h3>
               <p>{userPet.species}</p> 
           </div>
           <div className="line-item">
                <h3>Breed:</h3>
               <p>{userPet.breed}</p> 
           </div>
           <div className="line-item">
                <h3>Size:</h3>
               <p>{userPet.size}</p> 
           </div>
           <div className="line-item">
                <h3>Age:</h3>
               <p>{userPet.age}</p> 
           </div>
           <div className="line-item">
                <h3>Breed:</h3>
               <p>{userPet.diet}</p> 
           </div>
           <div className="line-item">
                <h3>State:</h3>
               <p>{userPet.state}</p> 
           </div>
           <div className="line-item">
                <h3>City:</h3>
               <p>{userPet.city}</p> 
           </div>
           <div className="line-item">
                <h3>Zip Code:</h3>
               <p>{userPet.zip_code}</p> 
           </div>
           <div className="line-item">
                <h3>Open to breeding: </h3>
               <p>{userPet.open_to_breeding ? <p>yes</p> : <p>no</p>}</p> 
           </div>
           <div className="line-item">
                <h3>Active: </h3>
               <p>{userPet.active ? <p>yes</p> : <p>no</p>}</p> 
           </div>
           <div className="line-item">
                <h3> Trained: </h3>
               <p>{userPet.trained ? <p>yes</p> : <p>no</p>}</p> 
           </div>
           <div className="line-item">
                <h3> Mental Disorders: </h3>
               <p>{userPet.mental_disorder}</p> 
           </div>
        
               
               </Modal>
    </div>
           <div className="info-btn">
            <Button onClick={handleDisplayPetInfoShowing } variant='dark'>   {userPet.name}'s info</Button>
           </div>

           <div className= "petbutton-container">
               <Button onClick={handlePetEdit} 
                    variant="dark">click to Edit

               </Button>
               
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
           <div  className="pet-remove-btn">
           <Button 
          
           onClick={handleUserPetDelete}
          variant="dark">click to remove {userPet.name}</Button>
               </div>
        </div>
    )
}


export default UserPetCard;