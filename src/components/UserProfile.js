
import React ,{useState, useEffect, useContext}from 'react';
import { UserContext } from "../context/user";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


import {
  MDBCol,
  MDBdiv,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBTypography,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBProgress
} from 'mdb-react-ui-kit';

import '../UserProfile.css'
import UserPetCard from './UserPetCard';




function UserProfile(){
  // document.body.style.backgroundImage = "url(https://media.giphy.com/media/12pJ8OxSWwO86Y/giphy.gif)"
  // document.body.backgroundRepeat = "no-repeat"
  // document.body.style.backgroundSize = "auto"// const [userInfo, setUserInfo] = useState =(null)backgroundSize = "auto|length|cover|contain|intial|inherit"

const {user} = useContext(UserContext)
const userPets = user && user.pets
// console.log(user)
const userReviews = user && user.user_reviews
// console.log(userReviews)





// https://media.giphy.com/media/12pJ8OxSWwO86Y/giphy.gif

//https://i.giphy.com/media/xTiTnp3zOLUGbBF4ME/giphy.webp








    return (

<>
<div className="outterbackground" >
      <MDBContainer className="py-5 h-100">
        <MDBRow className="profilecontainer">
          <MDBCol >
            <MDBCard>
              <div className="userimage ">
                <div className=" imagesize" >
                  <MDBCardImage  className= 'Image'src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                    alt="Generic placeholder image" />
                  
                </div>
                <div className="ms-3">
                  <MDBTypography tag="h5">{user && user.first_name}</MDBTypography>
                  <MDBCardText>New York</MDBCardText>
                </div>
              </div>
              <div className="infoblockcontainer " style={{ backgroundColor: 'pink' }}>
                <div className='infoblock text-center'>
                  <div>
                    <MDBCardText className="mb-1 h5">{user && user.age}</MDBCardText>
                    <MDBCardText className="small  mb-0">Birthdate</MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">{user && user.seeking_relationship ? <>💓</> : <>❌</>} </MDBCardText>
                    <MDBCardText className="small">Seeking Relationship </MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5">Her/She</MDBCardText>
                    <MDBCardText className="small mb-0">Pronouns</MDBCardText>
                  </div>
                </div>
              </div>
              <MDBCardBody className=''>
                <div className="mb-9">
                  <p className="lead fw-normal mb-1">About</p>
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    <MDBCardText className="font-italic mb-1">Web Developer</MDBCardText>


                   
                   
                  </div>
                </div>
                <div>
                <div className="mb-9 ">
                  <h3>Reviews From Borrowers </h3>
                  <div className='boxreviewscontainer'  style={{ backgroundColor: '#f8f9fa' }}>
                        {user && userReviews.map((userReview)=>{
                          return(
                            
                            <div className='line-item'
                            key={userReview.id}>
                            
                              {userReview.comments}
                            </div>
                          )
                        })}
                      </div>


                   
                   
                  </div>
                </div>
                <div className="align-items-center mb-4">
                  <MDBCardText className="lead ">My Pets </MDBCardText>
                  
                </div>
                <MDBRow>
                  <MDBCol className="mb-2">
                  <div className='userpetscontainer'>
                       {user && userPets.map( userPet=>{
                    return <UserPetCard
                      userPet={userPet}
                      key= {userPet.id}/>
                    
                                     
                  })}
                  </div>

                    
                  </MDBCol>
                 
                </MDBRow>
              
              </MDBCardBody>
      
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
      {/* <div className='user-page'>
          <div className='user-img-container' >
            <img className ='user-carImage'
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt=""/>
                  <br/>
                  
              

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
                       {user && user.seeking_relationship ? <p>💓</p> : <p>❌</p>} <br/>
                  
                      </div>
                     
                     
                      
                     
                        
                    </div>

                </div>
            
            </div>
           
          </div>
          
         
           
          <div className='userpetscontainer'>
                       {user && userPets.map( userPet=>{
                    return <UserPetCard
                      userPet={userPet}
                      key= {userPet.id}/>
                    
                                     
                  })}
            </div> */}
      
       
            
             
           
                {/* <div className='UserPetsContainer'> */}
             
                {/* </div> */}
        
           
               {/* <div className='user-text'> {user && user.first_name}</div>  */}
              {/* //can't read property of null fix &&double helps   */}
       

              </>
    
    )
}
export default UserProfile;