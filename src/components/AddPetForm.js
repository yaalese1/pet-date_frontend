import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function AddPetForm(){
    return (
        <div className="newpet-formholder">
            <h3 className="header"> Add Your New Pet Here</h3>
                <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control 
        name="name" 
       />
      </Form.Group>
         <Form.Group className="mb-3">
        <Form.Label>Species</Form.Label>
        <Form.Control 
        name="species" 
        />
      </Form.Group>
      
      <Form.Group className="mb-3">
        <Form.Label>Breed</Form.Label>
        <Form.Control 
        name="breed" 
       />
      </Form.Group>
      
      <Form.Group className="mb-3">
        <Form.Label>Age</Form.Label>
        <Form.Control 
        name="age" 
        />
      </Form.Group>
      
       <Form.Group className="mb-3">
        <Form.Label>Diet</Form.Label>
        <Form.Control 
        name="diet" 
        />
      </Form.Group>
      
      <Form.Group className="mb-3">
        <Form.Label>Size</Form.Label>
        <Form.Control 
        name="disorder" 
       />
      </Form.Group>
      
      <Form.Group className="mb-3">
        <Form.Label>Mental Disorder</Form.Label>
        <Form.Control 
        name="disorder" 
      />
      </Form.Group>
      
      
      <Form.Group className="mb-3">
       <Form.Label>Is Your Pet Trained ?</Form.Label>
        <Form.Check
         name= "trained"
        type="checkbox" 
         label= "Yes"/>
      </Form.Group>
      
       <Form.Group className="mb-3">
       <Form.Label>Is Your Pet Active ?</Form.Label>
        <Form.Check
         name= "active"
        type="checkbox" 
         label= "Yes"/>
      </Form.Group>
      
       <Form.Group className="mb-3">
       <Form.Label>Has your Pet Undergone Alteration ? </Form.Label>
        <Form.Check
         name= "alteration"
        type="checkbox" 
         label= "Yes"/>
      </Form.Group>
      
      <Form.Group className="mb-3">
       <Form.Label> Are You Open To Breeding This Pet  ? </Form.Label>
        <Form.Check
         name= ":open_to_breeding"
        type="checkbox" 
         label= "Yes"/>

      <Button>
        Click to add pet
      </Button>
      </Form.Group>

    
        </div>
    )
}

export default AddPetForm