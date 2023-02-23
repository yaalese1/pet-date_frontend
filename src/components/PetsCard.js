import React,{useState,useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
// import UserProfile from './UserProfile';
import "../PetCard.css"
import { UserContext } from "../context/user";








  function PetsCard ({id,pet, reviews}){
    const {user,setUser} = useContext(UserContext)
  
  
    const [ errors, setErrors ] = useState(null)
  
    



//   function handleSubmit(e) {
//     e.preventDefault()
//     setErrors([])
//     console.log(updatedPet)
//     fetch(`/pets/${pet.id}`, {
//         method: "PATCH",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(updatedPet),
//     }).then((r) => {
//         if (r.ok) {
//             r.json().then((updatedAnimal) => {
//                 const updatedPetInfo = user.petEdit.map((info) => info.id === petEdit.id ? updatedAnimal: info)
//                 const updatedUser = {...user, petEdit: updatedPetInfo}
//                 setUser(updatedUser)
//                 alert("Your pet has been updated")
//                navigate("/Pets")
//             })
//         } else {
//             r.json().then((err) => (setErrors(err.errors)))
//         }
//     })
// }










// console.log(pet)

    return (
  
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
              <Button variant="dark">click to Book</Button>
             


    </div>

        
{/*         
        <UserProfile pet={pet} comments={reviews.comments}/> */}
        
        
        
        
        
  </div>
       
       
  
       
    )
  }
  export default PetsCard

