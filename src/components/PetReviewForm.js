import React,{useContext,useState } from 'react';
import Form from 'react-bootstrap/Form';
import { UserContext } from "../context/user";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Rating from '@mui/material/Rating';




function PetReviewForm ({pet, id}){
const {user, setUser} = useContext(UserContext)
const navigate = useNavigate() 
const [starRatingValue, setStarRatingValue] = useState(0) 
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

    const newCommentAdded = [...user.pets,newComment]
    const addReviewToUser = {...user, pets: newCommentAdded}
    setUser(addReviewToUser)
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
      <Button  onClick={refreshPage} type='submit' variant='DARK'>post review </Button>
    </Form>
 
        </div>
    )
}

export default  PetReviewForm 