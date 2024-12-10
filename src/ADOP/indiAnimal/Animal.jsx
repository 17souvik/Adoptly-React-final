import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AllData from "../Data/Data";
import AnimalList from "../HomePage/AnimalList";
import './Animal.css'

export default function Animal() {
  const { category, id } = useParams();  
  const [animalDetails, setAnimalDetails] = useState(null);

  useEffect(() => {
    const Data = AllData();
    const animal = Data.find(animal => animal.id === parseInt(id) && animal.category.toLowerCase() === category.toLowerCase());
    setAnimalDetails(animal);
  }, [category, id]);

  return (
    <>
    <div className="indi-animal">
      {animalDetails ? (
        <div className="animal-details">
           <div className="indi-image">
              <img src={animalDetails.image} alt={animalDetails.breed} />
           </div>
           <div className="indi-text">
              <h3>{animalDetails.breed}</h3>
              <p>Age: {animalDetails.age}</p>
              <p>Place: {animalDetails.place}</p>
              <p>Price: {animalDetails.price}</p>
           </div>
        </div>
      ) : (
        <p>Animal not found!</p>
      )}
 
    </div>
    <AnimalList/>
    </>
  );
}
