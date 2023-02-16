import React from 'react';
// import PetsCard from './PetsCard'
import { useState, useEffect , useContext} from "react";


// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
// import Button from 'react-bootstrap/Button'
import PetsCard from './PetsCard'



function PetsPage () {
    const [pets, setPets] = useState([])

    useEffect (()=>{
        fetch('/pets')
        .then((resp) => resp.json())
        .then ((pets) => setPets(pets))
    
         
    
    },[]) 


    // const [petReview, setPetReview] = useState("")
    // useEffect (()=>{
    //     fetch('/pets_review')
    //     .then((resp) => resp.json())
    //     .then ((pets_review) => setPetReview(pets_review))
    
         
    
    // },[]) 

 const eachPet = pets.map((pet) =>{
    return( <PetsCard 
    pet={pet}
    key={pet.id}
    id= {pet.id}
    reviews={pet.pet_reviews}/>
   
    )
   
 })
 console.log (eachPet)




  
        return (


            <div className='pets-page'>
    
            {eachPet}
            
         
            
            </div>
      
        )
   




}

export default PetsPage