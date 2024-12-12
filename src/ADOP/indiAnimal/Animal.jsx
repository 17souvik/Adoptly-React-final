import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import AllData from "../Data/Data";
import AnimalList from "../HomePage/AnimalList";
import './Animal.css';

export default function Animal() {
  const { category, id } = useParams();  
  const [animalDetails, setAnimalDetails] = useState(null);
  const [isLiked, setIsLiked] = useState(false); // State to track heart color
  const [isBought, setIsBought] = useState(false); // State to track buy status

  useEffect(() => {
    const Data = AllData();
    const animal = Data.find(animal => animal.id === parseInt(id) && animal.category.toLowerCase() === category.toLowerCase());
    setAnimalDetails(animal);
  }, [category, id]);

  const handleWishlistClick = () => {
    setIsLiked(!isLiked); 
  };

  const handleBuyClick = () => {
    setIsBought(!isBought); 
  };

  return (
    <>
    <div className="indi-animal">
      {animalDetails ? (
        <div className="animal-details">
           <div className="indi-image">
              <img src={animalDetails.image} alt={animalDetails.breed} />
           </div>
           <div className="indi-text">
              <i>@{animalDetails.buyer_name}</i>
              <p>{animalDetails.description}</p>
              <hr />
              <h3 style={{ padding: 0, margin: 0 }}>{animalDetails.breed}</h3>
              <p>Age: {animalDetails.age}</p>
              <p>Place: {animalDetails.place}</p>
              <p>Price: ₹{animalDetails.price}</p>
              <div className="card-btn">
              <NavLink  to={`/adoptly/${category}/${id}/Payment`} 
                            state={{ price: animalDetails.price }}>
                <button onClick={handleBuyClick} className="buy-btn">
                  <span className={`buy ${isBought ? "bought" : ""}`}>
                    <i className="fas fa-cart-shopping"></i> {/* FontAwesome Buy Icon */}
                  </span> Buy
                </button>
                </NavLink>
                {/* <NavLink  to={`/adoptly/${category}/${id}/Payment`} 
                            state={{ price: animalDetails.price }}>
                              <button className="adopt-button" onClick={handleAdoptClick}>Adopt</button></NavLink> */}
                <button className="wishlist-btn" onClick={handleWishlistClick}>
                  <span className={`heart ${isLiked ? "liked" : ""}`}>
                    <i className="fas fa-heart"></i> {/* FontAwesome Heart Icon */}
                  </span> Wishlist
                </button>
              </div>
           </div>
        </div>
      ) : (
        <p>Animal not found!</p>
      )}
    </div>
    <AnimalList />
    </>
  );
}
