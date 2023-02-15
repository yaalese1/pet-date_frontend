import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


// import StarRatingComponent from 'react-simple-rating-component';




  function PetsCard ({id,pet, reviews}){

// console.log(reviews)

// const eachReview = reviews.map((review) =>{
   
// // })
// style={{ width: '20rem',  }}

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
            {/* reviews */}


          </div>

        
        
        
        
        
        
        
        
        </div>
       
       
  //  <Card className= "pet_card"style={{ width: '20rem',  }}> 
  //     <Card.Img variant="top" src='http://cdn.akc.org/content/hero/cute_puppies_hero.jpg' />
  //     <Card.Body>
  //       <Card.Title style={{marginLeft: '80px'}}>{pet.name}</Card.Title>
  //       <Card.Text >
  //      Species 
  //       <ul>{pet.species}</ul>
  //          Breed <ul>{pet.breed}</ul>
  //           Age 
  //           <ul>{pet.age}</ul>
  //          Size 
  //          <ul>{pet.size}</ul>
  //           {/* <ul>{String(petrained)}</ul> */}
  //          Diet 
  //          <ul>{pet.diet}</ul>

  //          Reviews 
  //           {reviews.map((review)=> {
  //               return(
  //                   <ListGroup.Item 
  //                       key= {review.id}>  
  //                       {review.comments} 
  //                      <br></br>
  //                      ⭐️{review.star_rating} 
  //                          </ListGroup.Item> 
  //               )
    
  //           }
  //           )}
  //       </Card.Text>
  //     </Card.Body>
     
     
     
  //     <Card.Body>
  //       <Card.Link href="#">bookpetpage</Card.Link>
  //       <Card.Link href="#">update pet</Card.Link>
  //     </Card.Body>
  //   </Card>
       
       
    )
  }
  export default PetsCard

