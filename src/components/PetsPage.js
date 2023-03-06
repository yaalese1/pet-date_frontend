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



 const eachPet = pets.map((pet) =>{
    return( <PetsCard 
    pet={pet}
    key={pet.id}
    id= {pet.id}
    reviews={pet.pet_reviews}/>
    
    )
   
 })





  
        return (


            <div className='pets-page'>
    
            {eachPet}
            
         
            
            </div>
      
        )
   




}

export default PetsPage