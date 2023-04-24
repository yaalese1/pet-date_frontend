
import React ,{useState, useContext, useEffect}from 'react';
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



 
 const {setUser, user} = useContext(UserContext)


 const  [smShow, setSmShow] = useState(false)
 const [ showAboutMe, setShowAboutMe] = useState(false)
 const[showEditAvatarShow, setShowEditAvatarShow] = useState(false)

 const userReviews = user && user.user_reviews
const navigate = useNavigate() 
const [editAvatar, setEditAvatar] = useState(user?.avatar_url)
const [editAboutMe, setEditAboutMe] = useState(user?.about_me)
const [password, setPassword] = useState(user?.password);
const [passwordConfirmation, setPasswordConfirmation] = useState(user?.password_confirmation);
const [isLoading, setIsLoading] = useState(false);
const [pets, setPets] = useState([])
  
   const [ errors, setErrors ] = useState(null)

useEffect(() => {
setEditAvatar(user?.avatar_url)
setEditAboutMe(user?.about_me)
setPets(user?.pets)
setPassword(user?.password)
setPasswordConfirmation(user?.password_confirmation)
},[user])


function handleEditAvatarForm(){
  setShowEditAvatarShow(true)
}
function  handleEditAvatarFormClosing(){
  setShowEditAvatarShow(() => setShowEditAvatarShow(false))
}










 function handlePetAddForm(){
  setSmShow(true)
  }

  function handlePetAddFormClosing (){
    setSmShow(() => setSmShow(false))     
}      



function handleAboutMeDisplay(){
  setShowAboutMe(true)
}

function handleAboutMeDisplayClosed(){
  setShowAboutMe(false)

}






function handleAboutSubmit(e){
  e.preventDefault()
  const aboutMeData = new FormData();
  aboutMeData.append("user[about_me]", editAboutMe);
  aboutMeData.append("user[password]",password);
  aboutMeData.append("user[passwordConfirmation]",passwordConfirmation)
  fetch(`/users/+${user.id}`, {
    method: "PATCH",
    // headers: {
    //     "Content-Type": "application/json",
    // },
    body:aboutMeData
}).then((r) => {
    if (r.ok) {
        r.json().then((aboutMeData) => {



       const  updateAboutMe= {...user, about_me: aboutMeData.about_me}

           
           setUser(updateAboutMe)
           
           navigate("/UserProfile")
          
        })
    } 
})
}

// const handleAboutMeChange =(e)=>{
//   const {name,value} = e.target
//   setFormData({...formData,[name]: value})
// }





return  (



          <div>
          

   
      
     


  
<div className="outterbackground" >
        <MDBContainer className="py-5 h-100">
        <MDBRow className="profilecontainer">
        <MDBCol>
        <MDBCard>
        <MDBCardText className='white-space'>C</MDBCardText>
      <div className="userimage ">
            <div className=" imagesize" >
              <MDBCardImage  className= 'Image'
                src={user?.avatar_url}
                alt="Generic placeholder image"
              />
            </div>
            <div className="ms-3">
                <MDBTypography tag="h5">
                {user?.first_name}
                </MDBTypography>
              </div>
       </div>
             <MDBCardText className='city'>
              City:{user?.city}
              </MDBCardText>
        <div className="infoblockcontainer ">
          <Button 
            onClick={handleEditAvatarForm}
            variant='dark'>edit profile image
          </Button>
        <Modal                  
            size="md"
            show={showEditAvatarShow}
            onHide={handleEditAvatarFormClosing}
            aria-labelledby="example-modal-sizes-title-sm"
            centered
           >
            <button 
              onClick={handleEditAvatarFormClosing}
              className='upload-backbttn'>
                ≪Back
            </button>
                <div className='imageModal'>
                  <Form
                      // onSubmit
                      // ={handleEditPhotoSubmit}
                      >
                    <Form.Group>
                      <Form.Label 
                          className='upload-header'>
                          Upload your new image below
                        </Form.Label>
                          <div className='upload-inputcontainer'>
                            <Form.Control 
                                className='edit-upload'
                                type="file" 
                                size="sm"
                                name="avatar"
                                placeholder={user?.avatar_url}
                                inputprops={{ accept: "avatar/*" }}
                                onChange={(e) => setEditAvatar(e.target.files[0])} 
                              />
                          </div>
                      </Form.Group>  
                          <div className='upload-inputcontainer'>
                          <Button  variant='dark' type="submit">save changes</Button>
                          </div>
                      
                      </Form>
                    
                      </div>
                      </Modal>
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
                  <div>
                  <Modal
                          
                    size="md"
                    show={showAboutMe}
                    onHide={() => setShowAboutMe(false)}
                    aria-labelledby="example-modal-sizes-title-md"
                    centered
                    >
                      
                        <button onClick={handleAboutMeDisplayClosed}className='abt-backbttn'>≪Back</button>
                        
                        <Form  className='about-modal'
                        onSubmit={ handleAboutSubmit}>
                        <Form.Label className='about-editheader'> Edit your about me text here </Form.Label>
                    
                        <Form.Group className= "mb-3">
                       
                 
                          <Form.Control
                         
                            // input= "text"
                            type="about_me" 
                        
                           size='lg'
                      
                         
                            value={editAboutMe}
                            onChange={(e) => setEditAboutMe(e.target.value)}

                          /> 
                      
                   
                 
                          </Form.Group>
                       
                          <div className='save-abtBttn'>
                          <Button type='submit' variant='dark'> Save Changes</Button>
                          </div> 
                        </Form>
                   
                    </Modal>
                 
                         
                  <Button onClick={handleAboutMeDisplay} variant='dark'>click to edit</Button>
                  
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
                <Button onClick={handlePetAddForm} className='addPet' variant="dark">Add Pet</Button>
                </div>
                <div className="align-items-center mb-4">
                  <MDBCardText className="lead "> {user?.first_name}'s Pets </MDBCardText>
                  
                </div>
                <MDBRow>
                  <MDBCol className="mb-2">
                    
                  <div className='userpetscontainer'>
                       {pets?.map( (userPet) =>{
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