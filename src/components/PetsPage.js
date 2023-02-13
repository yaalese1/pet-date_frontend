import React from 'react';
// import PetsCard from './PetsCard'
import { useState, useEffect } from "react";

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button'
import PetsCard from './PetsCard';


function PetsPage () {
    const [pets, setPets] = useState([])

    useEffect (()=>{
        fetch('/pets')
        .then((resp) => resp.json())
        .then ((pets) => setPets(pets))
    
         
    
    },[]) 


    const [petReview, setPetReview] = useState("")
    useEffect (()=>{
        fetch('/pets_review')
        .then((resp) => resp.json())
        .then ((pets_review) => setPetReview(pets_review))
    
         
    
    },[]) 

 const eachPet = pets.map((pet) =>{
    return( <PetsCard 
    pet={pet}
    key={pet.id}
    id= {pet.id}/>
    )
   
 })
 console.log (eachPet)


    // const eachPet = pets.map((pet) =>{
        return (


            <div>
            <li>{eachPet}</li>

            
            
            
            </div>
            // <PetsCard
            // pet={pet}
            // // petName= {pet.name}
            // key={pet.id}
            // id = {pet.id}
           
            // />
        )
    // })




}

export default PetsPage