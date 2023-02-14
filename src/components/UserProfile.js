
import React from 'react';
import {
  MDBCol,
  // MDBdiv,
  // MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  // MDBCardImage,
  // MDBBtn,
  // MDBProgressBar,
  // MDBIcon,
  // MDBListGroup,
  // MDBListGroupItem,
  // MDBProgress
} from 'mdb-react-ui-kit';

import '../UserProfile.css';
// import { div } from 'react-bootstrap';
// import Box from '@mui/material/Box';
// import PetsCard from './PetsCard'




function UserProfile(){

// function handlePetDisplay(){

// }











    return(
        <>


        
            
            
          {/* <MDBCardBody> */}
            
            {/* <MDBCardImage
            className='card-image'
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                   /> */}
                  
              
            {/* </MDBCardBody> */}
            <div class="flex-container">
            <br></br>
            <br></br>

            <img className= 'card-image' 
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt=""
            />
            </div>

            {/* <MDBBtn onClick={console.log("yaya")} >Edit Profile</MDBBtn>  */}
                    <br></br>
                    <br></br>
                    <br></br>
            <MDBCol md="6">
                    <MDBCard className="mb-4 mb-md-0">
                      <MDBCardBody>
                        <h1 className= 'pets'>PETS</h1>
                        <MDBCardText className="mb-4"><span className= 'pet-text'></span> PETS 
                        <img src='https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074__340.jpg'
                        alt ="avatar"/>
                        <br></br>
                        <img src= 'http://cdn.akc.org/content/hero/cute_puppies_hero.jpg'/>
                        </MDBCardText>
                      
                        {/* <MDBProgress className="rounded"> */}
                          {/* <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                        </MDBProgress> */}
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
           
           
    
          {/* <MDBdiv > */}
          {/* <section style={{ backgroundColor: '#eee' }}/> */}
    
            {/* <MDBRow> */}
             
                {/* <MDBCard>
                  <MDBCardBody className="card-body">
                    <MDBCardImage
                      src="https://blog.hootsuite.com/wp-content/uploads/2021/07/free-stock-photos-01-1366x2048.jpg.webp"
                      alt="avatar"
                      className="MBD-iMAGE"
                      style={{ width: '180px' }}
                      fluid />
                    <p >name</p>
                    <p >rating</p>
                    <div >
                      {/* <MDBBtn>Follow</MDBBtn> */}
                      {/* <MDBBtn outline >Edit Profile</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
                </MDBdiv> */} 



                {/* <MDBCol lg="8">
                <MDBCard className="mb-4">
                  <MDBCardBody>
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Name</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">Kim Lee</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow> */}
                      {/* <MDBCol sm="3">
                        <MDBCardText>Email</MDBCardText>
                      </MDBCol> */}
                      {/* <MDBCol sm="9">
                        <MDBCardText className="text-muted">example@example.com</MDBCardText>
                      </MDBCol> */}
                    {/* </MDBRow>
                   
                    <MDBRow> */}
                      {/* <MDBCol sm="3">
                        <MDBCardText>Phone</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">(097) 234-5678</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Mobile</MDBCardText>
                      </MDBCol> */}
                      {/* <MDBCol sm="9">
                    
                      </MDBCol>
                    </MDBRow>
                  
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>City</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">North Maricabury, CO</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
    
                <MDBRow>
                  
    
           
                </MDBRow>
              </MDBCol> */}





                {/* <MDBCol md="6">
                    <MDBCard className="mb-4 mb-md-0">
                      <MDBCardBody>
                        <MDBCardText className="mb-4"><span className="text-primary font-italic me-1"></span> PETS <MDBBtn onClick={console.log("yaya")} >Follow</MDBBtn> 
                        </MDBCardText>
                      
                        <MDBProgress className="rounded">
                          <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                        </MDBProgress>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol> */}
    
                {/* <MDBCard >
                  <MDBCardBody >
                    <MDBListGroup flush className="rounded-3">
                      <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                        <MDBIcon fas icon="globe fa-lg text-warning" />
                        <MDBCardText>pets </MDBCardText>
                        
                      </MDBListGroupItem>
                      <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                        <MDBIcon fab icon="github fa-lg" style={{ color: '#333333' }} />
                        <MDBCardText>github</MDBCardText>
                      </MDBListGroupItem>
                      <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                        <MDBIcon fab icon="twitter fa-lg" style={{ color: '#55acee' }} />
                        <MDBCardText>twitter</MDBCardText>
                      </MDBListGroupItem>
                      <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                        <MDBIcon fab icon="instagram fa-lg" style={{ color: '#ac2bac' }} />
                        <MDBCardText>instagram</MDBCardText>
                      </MDBListGroupItem>
                      <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                        <MDBIcon fab icon="facebook fa-lg" style={{ color: '#3b5998' }} />
                        <MDBCardText>facebook</MDBCardText>
                      </MDBListGroupItem>
                    </MDBListGroup>
                  </MDBCardBody>
                </MDBCard> */}
           
         



            {/* </MDBRow> */}
          
        {/* </section> */}
    
      </> 
    
    )
}
export default UserProfile;