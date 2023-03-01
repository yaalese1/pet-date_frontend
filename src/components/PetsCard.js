import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';

// import UserProfile from './UserProfile';
import "../PetCard.css"
// import { UserContext } from "../context/user";
import BookingPetForm from './BookingPetForm';
import Modal from 'react-bootstrap/Modal'








  function PetsCard ({id,pet, reviews}){
    // const {user,setUser} = useContext(UserContext)
    const [ errors, setErrors ] = useState(null)
    const  [smShow, setSmShow] = useState(false)

    function handleDisplayBookingForm(){
        setSmShow(true)
    }
    


    function handleBookingFormClosing(){
      setSmShow(false)
    }













    return (
  <div>
   <Modal
       size="sm"
       show={smShow}
       onHide={() => setSmShow(false)}
       aria-labelledby="example-modal-sizes-title-sm">
    <BookingPetForm pet={pet}
    handleBookingFormClosing={handleBookingFormClosing}/>
    </Modal>
    <div className='Petcard'>
      <div className='pet-cardImage'>
            <img src= 'http://cdn.akc.org/content/hero/cute_puppies_hero.jpg' 
            alt ="https://images.unsplash.com/photo-1579380656108-f98e4df8ea62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnJvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"/>
          </div>
        <div className='PetInfo'>
            <div className='line-item'>
              <h3>name:</h3>
              <p>{pet.name}</p>
             </div>
            <div className='line-item'>
              <h3>species:</h3>
              <p>{pet.species}</p>
            </div>
            <div className='line-item'>
              <h3>breed:</h3>
              <p>{pet.breed}</p>
            </div>
            <div className='line-item'>
              <h3>size:</h3>
              <p>{pet.size}</p>
            </div>
            <div className='line-item'>
              <h3>age:</h3>
              <p>{pet.age}</p>
            </div>
            <div className='line-item'>
              <h3>diet:</h3>
              <p>{pet.diet}</p>
            </div>
            <div className='reviewsContainer'>
                     {reviews.map((review)=> {
                    return(
                    <div className='ReviewList-item'
                        key={review.id}> 
                        <div className='review-comments'>
                        {review.comments} 
                        </div>
                        <div className='review-star'>
                          ⭐️{review.star_rating} 
                        </div> 
                      </div> 
                        )
    
                       }
                       )}
                </div>

           
           
           


    </div>
    <div className='bookbtn-container'>
                       <Button className='b' onClick={handleDisplayBookingForm} variant="dark">click to Book</Button>
              </div>

        
{/*         
        <UserProfile pet={pet} comments={reviews.comments}/> */}
        
        
        
        
        
  </div>
  
</div>   
       
  
       
    )
  }
  export default PetsCard

