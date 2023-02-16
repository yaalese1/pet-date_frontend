import React from "react";
import '../UserProfile.css'
import Button from 'react-bootstrap/Button';





function UserPetCard ({id,userPet}){
    return(

        <div className='user'>
            <div className ='userpet-cardImage'>
                <img src ='http://cdn.akc.org/content/hero/cute_puppies_hero.jpg' alt ="avtar"/>

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
               <Button variant="dark">click to Edit</Button>
               <Button variant="dark">click to delete</Button>
                </div>


           </div>
          
        </div>
    )
}


export default UserPetCard