import React, { useState, useEffect } from "react";
import AllData from "../Data/Data";
import { NavLink } from "react-router-dom";
// import Gallary from "../GallaryPage/Gallary";
// import Banner from "../BannerPage/Banner";
import './Home.css'

export default function AnimalList() {
    
    const [speficAnimal, setSpeficAnimal] = useState([]);

    useEffect(() => {
        const Data = AllData();

        const categories = ["Dog", "Cat", "Rabbit", "Bird", "Tiger", "Lion"];
        
       
        const uniqueAnimals = categories.map(category =>
            Data.find(animal => animal.category === category)
        );

       
        const limitedAnimals = Data.slice(0, 8); 

        setSpeficAnimal(limitedAnimals); 
    }, []);

    return (
        <div>
            {/* <Banner/> */}
            {speficAnimal.length > 0 && (
                <div className="animal">
                    {speficAnimal.map((animal, idx) =>
                        animal ? (
                            <NavLink key={idx} to={`/adoptly/${animal.category}`}>
                                <div className="animal-card">
                                    <img src={animal.image} alt={animal.breed} />
                                    <i>{animal.category}</i>
                                    
                                    <p>Breed : {animal.breed}</p>
                                    
                                    <p>{animal.place}</p>
                                </div>
                            </NavLink>
                        ) : null
                    )}
                </div>
            )}
            {/* <Gallary/> */}
        </div>

        
    );
   
}
