import React from "react";
import {useEffect, useState} from "react"


const PetContext = React.createContext()
function PetProvider({children}){

const [pets, setPets] = useState([])

useEffect (()=>{
    fetch('/pets')
    .then((resp) => resp.json())
    .then ((pets) => setPets(pets))

     

},[]) 




return(
    <PetContext.Provider 
    value ={{pets, setPets}}>
    {children}
    </PetContext.Provider>
)

}


export {PetContext, PetProvider}