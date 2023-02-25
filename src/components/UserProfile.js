
import React ,{useState, useEffect, useContext}from 'react';
import { UserContext } from "../context/user";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import PetEditForm from "./PetEditForm";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';




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
import UserPetCard from './UserPetCard'
import AddPetForm from './AddPetForm'





function UserProfile(){
  const navigate = useNavigate()

 
const {user, setUser} = useContext(UserContext)
const userPets = user && user.pets
const  [smShow, setSmShow] = useState(false)
// console.log(user)
const userReviews = user && user.user_reviews


function handlepetAddedPage(){
  setSmShow(true)
}







    return (

<div>

  
<div className="outterbackground" >
      <MDBContainer className="py-5 h-100">
        <MDBRow className="profilecontainer">
          <MDBCol >
            <MDBCard>
              <div className="userimage ">
                <div className=" imagesize" >
                  <MDBCardImage  className= 'Image'src="https://static.vecteezy.com/system/resources/thumbnails/002/002/253/small/beautiful-woman-wearing-sunglasses-avatar-character-icon-free-vector.jpg"
                    alt="Generic placeholder image" />
                  
                </div>
                <div className="ms-3">
                  <MDBTypography tag="h5">{user .first_name}</MDBTypography>
                  <MDBCardText>New York</MDBCardText>
                </div>
              </div>
              <div className="infoblockcontainer " style={{ backgroundColor: 'pink' }}>
                <div className='infoblock text-center'>
                  <div>
                    <MDBCardText className="mb-1 h5">{user.age}</MDBCardText>
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
                        {userReviews?.map((userReview)=>{
                          
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
                <div className='someContainer'>
                <Button onClick={handlepetAddedPage} className='addPet' variant="dark">Add Pet</Button>
                </div>
                <div className="align-items-center mb-4">
                  <MDBCardText className="lead ">My Pets </MDBCardText>
                  
                </div>
                <MDBRow>
                  <MDBCol className="mb-2">
                  <div className='userpetscontainer'>
                       {userPets?.map( userPet=>{
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
      
  <Modal
     
     size="sm"
     show={smShow}
     onHide={() => setSmShow(false)}
     aria-labelledby="example-modal-sizes-title-sm"
   >
       <AddPetForm/>
       </Modal>

              </div>
    
    )
}
export default UserProfile;