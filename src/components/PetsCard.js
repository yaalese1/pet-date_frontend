import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

// import StarRatingComponent from 'react-simple-rating-component';




  function PetsCard ({pet, reviews}){
console.log(reviews)

// const eachReview = reviews.map((review) =>{
   
// })

    return (
        <>
  
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src='http://cdn.akc.org/content/hero/cute_puppies_hero.jpg' />
      <Card.Body>
        <Card.Title>{pet.name}</Card.Title>
        <Card.Text>
            <ul>{pet.species}</ul>
            <ul>{pet.breed}</ul>
            <ul>{pet.age}</ul>
            <ul>{pet.size}</ul>
            {/* <ul>{String(petrained)}</ul> */}
            <ul>{pet.diet}</ul>
            <ui>{pet.comments}</ui>
            {reviews.map((review)=> {
                return(
                    <ListGroup.Item 
                        key= {review.id}>  
                        {review.comments} 
                       <br></br>
                       ⭐️{review.star_rating} 
                           </ListGroup.Item> 
                )
    
            }
            )}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        
        <ListGroup.Item></ListGroup.Item>
        <ListGroup.Item></ListGroup.Item>
        <ListGroup.Item>pet review</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">bookpetpage</Card.Link>
        <Card.Link href="#">update pet</Card.Link>
      </Card.Body>
    </Card>
        </>
    )
  }
  export default PetsCard

