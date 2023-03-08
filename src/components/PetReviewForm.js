import React,{useContext,useState } from 'react';
import Form from 'react-bootstrap/Form';
import { UserContext } from "../context/user";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Rating from '@mui/material/Rating';




function PetReviewForm ({pet, id, setPets, pets}){

const {user, setUser} = useContext(UserContext)
const navigate = useNavigate() 
const [starRatingValue, setStarRatingValue] = useState(0) 
// console.log(pets)


const [formData, setFormData] = useState({
    pet_id: pet.id,
    comments: "",
    star_rating: parseFloat(starRatingValue)
})


function handleSubmit(e){
    e.preventDefault();
    fetch("/pet_reviews",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
})
.then((r) => r.json())
.then((newComment) =>{

//  const addNewComment = pet.pet_reviews.map((pet_review)=>pet_review.id === newComment.id ? {...pet_review, newComment} : pet_review)


 const addNewComment = [...pet.pet_reviews, newComment]
// const addNewComment = pet.pet_reviews.map((pet_review)=> pet_review.id === newComment.id ? newComment: pet_review)

//  console.log(addNewComment)
 const updatePetReview = {...pet,pet_reviews:addNewComment }
console.log(updatePetReview.id)
const settingPets = pets.map((pet)=>
  pet.id === updatePetReview.id ? updatePetReview : pet)

setPets( settingPets )

console.log(updatePetReview)


    navigate("/Pets")
})
}



const handleChange =(e) =>{
    const {name,value} = e.target
    setFormData({...formData,[name]: value})
}

function refreshPage() {
    window.location.reload(false);
  }

//   console.log (formData)

    return (
        <div>
  <Form onSubmit={handleSubmit}>
      
      <Form.Group className="mb-3" >
        <Form.Label>Leave a review   🐾</Form.Label>
        <Form.Control 
        name="comments"  
        value={formData.comments} 
        onChange={ handleChange}/>
          <Rating
        name="star_rating"
        value={formData.star_rating}
        onChange={ handleChange}
       
      />
      </Form.Group>
      <Button   type='submit' variant='dark'>post your review </Button>
    </Form>
 
        </div>
    )
}

export default  PetReviewForm 