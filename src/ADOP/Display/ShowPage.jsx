import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import AllData from "../Data/Data";
import './ShowPage.css';

export default function ShowPage() {
    const { category } = useParams(); 
    const [filteredAnimals, setFilteredAnimals] = useState([]);

    useEffect(() => {
        const Data = AllData();
        const animals = Data.filter(animal => animal.category === category);
        setFilteredAnimals(animals);
    }, [category]);

    return (
        <div>
            {/* <h1>Animals in {category} Category</h1> */}
            <div className="animal">
                {filteredAnimals.length > 0 ? (
                    filteredAnimals.map((animal, idx) => (
                        <NavLink key={idx} to={`/adoptly/${animal.category.toLowerCase()}/${animal.id}`}>
                            <div className="animal-card">
                                <img src={animal.image} alt={animal.breed} />
                                <h3>{animal.breed}</h3>
                                <p>Age: {animal.age}</p>
                                <p>Place: {animal.place}</p>
                                <p>Price: ₹{animal.price}</p>
                            </div>
                        </NavLink>
                    ))
                ) : (
                    <p>Sorry, no animals found in this category.</p>
                )}
            </div>
        </div>
    );
}
