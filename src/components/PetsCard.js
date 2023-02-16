import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
// import UserProfile from './UserProfile';







  function PetsCard ({id,pet, reviews}){
    const [name, setName] = useState("");
    const [age, setAge] = useState("")
    const [mental_disorder, setMental_disorder] = useState ("")
    const [active, setActive] = useState(true)
    const [trained, setTrained] = useState(true)
    const [diet, setDiet] = useState("")
    const [size, setSize] = useState("")
    function handleEditPet(e){


      
    }
console.log(pet)

    return (
  
    <div className='Petcard'>
      <div className='pet-cardImage'>
            <img src= 'http://cdn.akc.org/content/hero/cute_puppies_hero.jpg' 
            alt ="avatar"/>
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
              <Button variant="dark">click to Book</Button>
             


    </div>

        
{/*         
        <UserProfile pet={pet} comments={reviews.comments}/> */}
        
        
        
        
        
  </div>
       
       
  
       
    )
  }
  export default PetsCard

