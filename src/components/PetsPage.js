import React from 'react';
// import PetsCard from './PetsCard'
import { useState, useEffect , useContext} from "react";
import { Form, Button} from "react-bootstrap";


// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';

import PetsCard from './PetsCard'



function PetsPage ({pets, setPets}) {
    // const [pets, setPets] = useState([])
    const[newSearch, setNewSearch] = useState("")


    // useEffect (()=>{
    //     fetch('/pets')
    //     .then((resp) => resp.json())
    //     .then ((petsArray) => setPets(petsArray))
    
        
    // },[]) 
console.log(pets)


    const speciesSearch = pets.filter(pet => {
        return   pet.species.toLowerCase().includes(newSearch.toLowerCase())})
    
    const eachPet = speciesSearch.map((pet) =>{
        return( <PetsCard 
            pet={pet}

            key={pet.id}
            // petid= {pet.id}
            // speciesSearch={speciesSearch}
            pets={pets}
            setPets={setPets}
            reviews={pet.pet_reviews}
            
            />
            
            )
            
        })
        

       
       
       
       
       
       
       
           function handlePetSearch(e){
               setNewSearch(e.target.value)
            //    setPets(speciesSearch)
            
           }
        

  
        return (
       

            <div className='pets-page'>
             <div className='petSearch'>
             <p>Search pet  by species </p> 
                <input
                className='search-input'
                type='text'
               
                onChange={handlePetSearch}
                />
               
               {/* <Form className='petSearch-form'>
                <Form.Label> Search by Species</Form.Label>
                    <input
                    type="text"
                    placeholder="Species"
                    aria-label="Search"
                    onChange={handlePetSearch}/> */}
                 {/* <Button variant="dark">Search</Button> */}
                 {/* <Button  variant='dark'>Clear</Button>
                </Form> */}

            </div>
        {/* {if pets.owner_id === user.id } */}
            {eachPet}
            
         
            
            </div>
            
      
        )
   




}

export default PetsPage