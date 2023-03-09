import React,{useState, useContext} from 'react';
import Button from 'react-bootstrap/Button';
import { UserContext } from "../context/user";
// import UserProfile from './UserProfile';
import "../PetCard.css"
// import { UserContext } from "../context/user";
import BookingPetForm from './BookingPetForm';
import Modal from 'react-bootstrap/Modal'
import PetReviewForm from './PetReviewForm';
import Rating from '@mui/material/Rating';








  function PetsCard ({id,pet, reviews, pets, setPets, }){
    const {user,setUser} = useContext(UserContext)
    const [ errors, setErrors ] = useState(null)
    const  [smShow, setSmShow] = useState(false)
    const[showPetDetail, setShowPetDetail] = useState(false)
    const [showPetReviews, setShowPetReviews] = useState(false)

    const handlePetInfoModalClosing = () => setShowPetDetail(false)
    const handleDisplayPetInfoShowing = () => setShowPetDetail(true)
    const handlePetReviewsModalShowing = () => setShowPetReviews(true)
    
    function handleDisplayBookingForm(){
        setSmShow(true)
    }
    


    function handleBookingFormClosing(){
      setSmShow(false)
    }

const reviewId = pet.pet_reviews.find((pet_review)=>{
  return pet_review.id 
 
})
// const selectedId = reviewId.filter((reviewId.id))


 
// const selectedReview = reviewId.filter((selectRev)=>{
//   selectRev
// })
//  const reviewsId = reviews.map((review)=>{
//   return review.id
  
//  })



function handleDeleteReview(deletedReviewId){
  fetch(`/pet_reviews/${deletedReviewId}`,{method:"DELETE",}).then((r)=>{
    if(r.ok){

      const  petReviewRemoved  = pet.pet_reviews.filter((review)=> review.id !== deletedReviewId)
      const petReviewUpdated ={...pet, pet_reviews: petReviewRemoved }
      console.log( petReviewUpdated )
      // const userReviewRemoved = reviewId.filter((pet)=> pet.id !== reviewId)
      // const userReviewUpdated = {...user, reviews:userReviewRemoved}

      const updateAllPets =  pets.map((pet)=> 
        pet.id  === petReviewUpdated.id ? petReviewUpdated : pet
      )

      setPets( updateAllPets)
    }
  })
}





    return (
  <div>
      
   <Modal
       size="lg"
       show={smShow}
       onHide={() => setSmShow(false)}
       aria-labelledby="example-modal-sizes-title-lg">
    <BookingPetForm pet={pet}
    handleBookingFormClosing={handleBookingFormClosing}/>

   
    </Modal>
    
    <div className='Petcard'>
      <div className='pet-cardImage'>
            <img src= 'http://cdn.akc.org/content/hero/cute_puppies_hero.jpg' 
            alt ="https://images.unsplash.com/photo-1579380656108-f98e4df8ea62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnJvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"/>
          </div>
          <p className= "petcard-intro">
                 Hello, my name is {pet.name}.
                 Click the info button to 
                 know more about me !</p> 

          <div className='infobtn-container'>
             <Button onClick={handleDisplayPetInfoShowing } variant='dark'>{pet.name}'s Info</Button>
          </div>
          <div className='reviewbtn-container'>
            <Button onClick={handlePetReviewsModalShowing} variant='dark' >Reviews</Button>
           </div>
          <div className='bookbtn-container'>
                <Button className='b' onClick={handleDisplayBookingForm} variant="dark">click to book {pet.name} !</Button>
          </div>
        
        <div className='PetInfo'>
       <Modal 
       size="sm"
       show={showPetDetail}
       onHide={() =>setShowPetDetail(false)}
       aria-labelledby="example-modal-sizes-title-sm"
       >
        <div className="line-item">
                <h3>Name:</h3>
                <p>{pet.name}</p> 
           </div>
           <div className="line-item">
                <h3>Species:</h3>
               <p>{pet.species}</p> 
           </div>
           <div className="line-item">
                <h3>Breed:</h3>
               <p>{pet.breed}</p> 
           </div>
           <div className="line-item">
                <h3>Size:</h3>
               <p>{pet.size}</p> 
           </div>
           <div className="line-item">
                <h3>Age:</h3>
               <p>{pet.age}</p> 
           </div>
           <div className="line-item">
                <h3>Breed:</h3>
               <p>{pet.diet}</p> 
           </div>
           <div className="line-item">
                <h3>State:</h3>
               <p>{pet.state}</p> 
           </div>
           <div className="line-item">
                <h3>City:</h3>
               <p>{pet.city}</p> 
           </div>
           <div className="line-item">
                <h3>Zip Code:</h3>
               <p>{pet.zip_code}</p> 
           </div>
           <div className="line-item">
                <h3>Open to breeding: </h3>
               <p>{pet.open_to_breeding ? <p>yes</p> : <p>no</p>}</p> 
           </div>
           <div className="line-item">
                <h3>Active: </h3>
               <p>{pet.active ? <p>yes</p> : <p>no</p>}</p> 
           </div>
           <div className="line-item">
                <h3> Trained: </h3>
               <p>{pet.trained ? <p>yes</p> : <p>no</p>}</p> 
           </div>
           <div className="line-item">
                <h3> Mental Disorders: </h3>
               <p>{pet.mental_disorder}</p> 
           </div>
        </Modal>

        <Modal
          size="md"
          show={showPetReviews}
          onHide={() =>setShowPetReviews(false)}
          aria-labelledby="example-modal-sizes-title-md">
            <div className='line'>
           
                     {reviews?.map((review)=> {
                    return(
                    <div className='ReviewList-item'
                        key={review.id}> 
                        <div className='review-comments'>
                        <p>{user?.first_name}:</p>
                        {review.comments} 
                        </div>
                        <div className='line-item'>
                         
                        <Rating name="read-only" value={review.star_rating}  readOnly />
                        <div className='trash-container'>
                        <button onClick={ ()=>handleDeleteReview(review.id)} className='trash-btn'variant="DARK">🗑</button>
                        </div>
                        </div> 
                     
                      </div> 
                        )
                        
                      }
                      )}
                  </div>
                  <PetReviewForm 
                id={pet.id}
                pet={pet}
                pets={pets}
                setPets={setPets}
                reviews={reviews}
                
                  />
      </Modal>
            </div>
          

        
{/*         
        <UserProfile pet={pet} comments={reviews.comments}/> */}
        
        </div>
          
    </div>   
       
  
       
    )
  }
  export default PetsCard

