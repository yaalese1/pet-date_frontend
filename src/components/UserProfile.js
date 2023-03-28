
import React ,{useState, useContext}from 'react';
import { UserContext } from "../context/user";
import { useNavigate } from "react-router-dom";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import '../UserProfile.css'
import UserPetCard from './UserPetCard'
import AddPetForm from './AddPetForm'
import {
  MDBCol,
 
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,

  MDBContainer,
  MDBTypography,

} from 'mdb-react-ui-kit';




function UserProfile(){



 
 const {user, setUser} = useContext(UserContext)
//  const userPets = user && user.pets
 const  [smShow, setSmShow] = useState(false)
// console.log(user.pets)
 const userReviews = user && user.user_reviews
const [ showAboutMe, setShowAboutMe] = useState(false)
const navigate = useNavigate() 

 function handlePetAddForm(){
  setSmShow(true)
  }

  function handlePetAddFormClosing (){
    setSmShow(() => setSmShow(false))     
}      



function handleAboutMeDisplay(){
  setShowAboutMe(true)
}

const [formData, setFormData] = useState({
  about_me: ""
})

function handleAboutSubmit(e){
  e.preventDefault()
  fetch('/users/'+`${user.id}`, {
    method: "PATCH",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
}).then((r) => {
    if (r.ok) {
        r.json().then((aboutMeData) => {
         
          console.log(aboutMeData)


       const  updateAboutMe= {...user, about_me: aboutMeData.about_me}
   
           
           setUser(updateAboutMe)
           
           navigate("/UserProfile")
          
        })
    } 
})
}

const handleAboutMeChange =(e)=>{
  const {name,value} = e.target
  setFormData({...formData,[name]: value})
}

return  (



          <div>
          

   
      
     


  
<div className="outterbackground" >
      <MDBContainer className="py-5 h-100">
        <MDBRow className="profilecontainer">
          <MDBCol >
            <MDBCard>
            <MDBCardText className='white-space'>C</MDBCardText>
            
              <div className="userimage ">
                
                <div className=" imagesize" >
                  <MDBCardImage  className= 'Image'src={user?.avatar_url}
                    alt="Generic placeholder image" />
                  
                </div>
                
                <div className="ms-3">
                  <MDBTypography tag="h5">  {user?.first_name}</MDBTypography>
               
                </div>
       
              </div>
              <MDBCardText className='city'>City: {user?.city}</MDBCardText>
              <div className="infoblockcontainer " style={{ backgroundColor: 'pink' }}>
              
                <div className='infoblock text-center'>
               
                  <div>
                    <MDBCardText className="mb-1 h5">{user?.age}</MDBCardText>
                    <MDBCardText className="small  mb-0">Age</MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">{user?.seeking_relationship ? <>💓</> : <>❌</>} </MDBCardText>
                    <MDBCardText className="small">Seeking Relationship </MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5">{user?.pronouns}</MDBCardText>
                    <MDBCardText className="small mb-0">Pronouns</MDBCardText>
                  </div>
                </div>
              </div>
              <MDBCardBody >
                <div className="mb-9">
                  <p className="lead fw-normal mb-1"> About me </p> 
              
                 
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                   
                    <MDBCardText className="font-italic mb-1">{user?.about_me}
                    </MDBCardText>
                    <div className= "abt-btn">
                   </div>
                    
                  </div>
                  <Modal                  
                    size="lg"
                    show={showAboutMe}
                    onHide={() => setShowAboutMe(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                    >
                        <Form onSubmit={ handleAboutSubmit}>
                        <Form.Group className= "mb-3">
                        <Form.Label> edit your About Me text here</Form.Label>
                        
                          <Form.Control
                            input= "text"
                            name="about_me" 
                           
                            value={formData.about_me}
                            onChange={handleAboutMeChange}

                          /> 
                          <div>
                          <Button type='submit' variant='dark'> Save Changes</Button>
                          </div>
                          </Form.Group>
                        </Form>

                    </Modal>
                  <Button onClick={handleAboutMeDisplay} variant='dark'>click to edit</Button>
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
                <Button onClick={handlePetAddForm} className='addPet' variant="dark">Add Pet</Button>
                </div>
                <div className="align-items-center mb-4">
                  <MDBCardText className="lead "> {user?.first_name}'s Pets </MDBCardText>
                  
                </div>
                <MDBRow>
                  <MDBCol className="mb-2">
                    
                  <div className='userpetscontainer'>
                       {user?.pets.map( (userPet) =>{
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
     
      size="lg"
     show={smShow}
     onHide={() => setSmShow(false)}
     aria-labelledby="example-modal-sizes-title-"
   >
   
        <AddPetForm handlePetAddFormClosing={handlePetAddFormClosing}/>
      
       </Modal>

              </div>
    
    )
}
export default UserProfile;