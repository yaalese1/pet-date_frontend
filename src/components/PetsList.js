import React from "react";
import PetsCard from "./PetsCard";

function PetsList ({pets}){
 const petCard = pets.map((pet)=>{
    return (
      <PetsCard 
      pet={pet}
      key={pet.id}
      id= {pet.id}
      reviews={pet.pet_reviews}
      />
    )
 })
 return(
    <div >
    {petCard} 
    </div>
 )
}

export default PetsList