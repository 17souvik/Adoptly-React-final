import { gsap } from 'gsap';
import { React, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import AllData from "../Data/Data";
import './Paymentsuc.css';


const PaymentSuc = () => {
  const { category, id } = useParams();
  const [animalDetails, setAnimalDetails] = useState(null);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const Data = AllData();
    const animal = Data.find(
      (animal) =>
        animal.id === parseInt(id) &&
        animal.category.toLowerCase() === category.toLowerCase()
    );
    setAnimalDetails(animal);

    // Set the current time
    const now = new Date();
    const formattedTime = now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    setCurrentTime(formattedTime);
  }, [category, id]);

  const shipping = 60.99; // Shipping cost
  const tax = 50.0; // Fixed tax
  
  const totalAmount = animalDetails?.price
    ? parseFloat(animalDetails.price.replace(/,/g, "")) + shipping + tax
    : 0;
  
  useEffect(() => {
    // GSAP animation setup
    gsap.set(".check-circle", {
      strokeDasharray: 126,
      strokeDashoffset: 126,
    });
    gsap.set(".checkmark", {
      strokeDasharray: 30,
      strokeDashoffset: 30,
    });

    const tl = gsap.timeline();
    tl.to(".check-circle", {
      duration: 0.8,
      strokeDashoffset: 0,
      ease: "power2.inOut",
    })
      .to(".checkmark", {
        duration: 0.5,
        strokeDashoffset: 0,
        ease: "power2.out",
      })
      .to(".amount", { duration: 0.5, opacity: 1, y: 0, ease: "back.out" })
      .to(".message", { duration: 0.5, opacity: 1, y: 0, ease: "back.out" }, "-=0.3")
      .to(".timestamp", { duration: 0.5, opacity: 1, y: 0, ease: "back.out" }, "-=0.3");
  }, []);

  return (
    <div className="body">
      <div className="success-card">
        <div className="success-icon">
          <svg viewBox="0 0 50 50">
            <circle className="check-circle" cx="25" cy="25" r="20" />
            <path className="checkmark" d="M15 25 L22 32 L35 18" />
          </svg>
        </div>
        <div className="amount">₹{totalAmount.toFixed(2)}</div>
        <div className="message">Payment Successful!</div>
        <div className="timestamp">Transaction completed at {currentTime}</div>
      </div>
    </div>
  );
};

export default PaymentSuc;
