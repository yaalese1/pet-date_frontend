
import React ,{useState, useEffect, useContext}from 'react';
import { UserContext } from "../context/user";
// import {
//   MDBCol,
//   // MDBdiv,
//   // MDBRow,
//   MDBCard,
//   MDBCardText,
//   MDBCardBody,
//   // MDBCardImage,
//   // MDBBtn,
//   // MDBProgressBar,
//   // MDBIcon,
//   // MDBListGroup,
//   // MDBListGroupItem,
//   // MDBProgress
// } from 'mdb-react-ui-kit';

import '../UserProfile.css'
import UserPetCard from './UserPetCard';




function UserProfile(){
// const [userInfo, setUserInfo] = useState =(null)

const {user, setUser} = useContext(UserContext)
const userPets = user && user.pets
// console.log(userPets)

















    return (

<>
      <div className='user-page'>
          <div className='user-img-container' >
            <img className ='user-carImage'
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt=""/>
          </div>

          <div className='user-card-container'>
           <div className='User-card'>
              <div className='userInfo'>
                    <div className='line-item'>
                        <h3>Name:</h3>
                        <p>{user && user.first_name}</p>
                      </div>
                      <div className='line-item'>
                        <h3>Birthdate:</h3>
                        <p>{user && user.age}</p>
                      </div>
                      <div className='line-item'>
                        <h3>Seeking Relationship:</h3>
                       {user && user.seeking_relationship ? <p>💓</p> : <p>❌</p>}
                 


                      </div>

                </div>
            </div>
          </div>
          </div>
           
          <div className='userpetscontainer' UserPetsContainer>  
                       {user && userPets.map( userPet=>{
                    return <UserPetCard
                      userPet={userPet}
                      key= {userPet.id}/>
                    
                                     
                  })}
                    </div>
      
       
            
             
           
                {/* <div className='UserPetsContainer'> */}
             
                {/* </div> */}
        
           
               {/* <div className='user-text'> {user && user.first_name}</div>  */}
              {/* //can't read property of null fix &&double helps   */}
       

              </>
    
    )
}
export default UserProfile;