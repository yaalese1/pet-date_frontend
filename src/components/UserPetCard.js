import React, { useContext,useState }  from "react";
import { UserContext } from "../context/user";
import '../UserProfile.css'
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import PetEditForm from "./PetEditForm"
import Modal from 'react-bootstrap/Modal';





function UserPetCard ({userPet}){
     const navigate = useNavigate()
     const {user, setUser} = useContext(UserContext)
    //  const { id } = useParams()
     const [ errors, setErrors ] = useState(null)
     const [smShow, setSmShow] = useState(false);
// console.log(userPet)


function handlePetEdit(){
    // navigate(`/PetEditForm/${userPet.id}`)
    console.log(userPet.id)
    setSmShow(true)
  }


        // function handleSubmit(e) {
        //       e.preventDefault()
        //       setErrors([])
        //       console.log(updatedPet)
        //       fetch(`/pets/${petEdit}`, {
        //           method: "PATCH",
        //           headers: {
        //               "Content-Type": "application/json",
        //           },
        //           body: JSON.stringify(updatedPet),
        //       }).then((r) => {
        //           if (r.ok) {
        //               r.json().then((updatedAnimal) => {
        //                   const updatedPetInfo = user && user.petEdit.map((info) => info.id === petEdit.id ? updatedAnimal: info)
        //                   const updatedUser = {...user, petEdit: updatedPetInfo}
        //                   setUser(updatedUser)
        //                   alert("Your pet has been updated")
        //                  navigate("/Pets")
        //               })
        //           } else {
        //               r.json().then((err) => (setErrors(err.errors)))
        //           }
        //       })
        //   }


  
    // function handleUserPetDeleteClick(){
    //         fetch(`pets/${userPet.id}`, {
    //           method: "DELETE",
    //         })
    //           .then((r) => {
    //             if (r.ok){
    //                 r.json().then((deletedAnimal) => {

    //                     console.log(deletedAnimal)
    //                     // const deletedPetFromPage = user.userPet.map((pet) => pet.id === deletedAnimal.id ? deletedAnimal : pet)
    //                     const deletedPetFromPage = user.userPet.filter((pet)=> pet.id !== deletedAnimal.id )
    //                     const userDeletedPet = {...user, userPet: deletedPetFromPage}
    //                     setUser(userDeletedPet)

    //                     alert("Your pet has been Removed")
    //                     navigate("/UserProfile")
    //                 })
    //             } else {
    //                 // r.json().then((err) => (setErrors(err.errors)))
    //             }
            
         
          
    //           })

    //         }



        function handleUserPetDelete(){
           
            fetch(`/pets/${userPet.id}`,{
                method:"DELETE" ,
                })
               
                .then(() =>{
               
                const userPetUpdatedArray = user.userPet?.filter((pet)=> pet.id !== userPet.id)
                console.log(userPetUpdatedArray)
                
                // const userDeletedPet = {...user, userPet: userPetUpdatedArray}

                // setUser(userPetUpdatedArray )
          

                alert("Your pet has been Removed please refresh to see your updated profile")
                        navigate("/UserProfile")
           
            } )
           
        }



            // const newUserPetsArray =(...)
          
         


// console.log(userPet)

function handleModalClosing (){
    setSmShow(() => setSmShow(false))     
}     




    return(

        <div className='user'>
            
            <div >
                <img className ='userpet-cardImage' src ='http://cdn.akc.org/content/hero/cute_puppies_hero.jpg' alt ="avtar"/>

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
               <Button onClick={handlePetEdit} variant="dark">click to Edit</Button>
              
               <Button onClick={handleUserPetDelete} variant="dark">click to delete</Button>
                </div>
              

           </div>
                      
           <Modal
     
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
              
           <PetEditForm pets={userPet}
           handleModalClosing=
           {handleModalClosing}/>
          
           </Modal>

          
        </div>
    )
}


export default UserPetCard