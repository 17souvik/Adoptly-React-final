import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllData from "../Data/Data";
import "./Payment.css";



export default function Payment(){

  const { category, id } = useParams();
  const [animalDetails, setAnimalDetails] = useState(null);
  
  const navigate = useNavigate();

  useEffect(() => {
    const Data = AllData();
    const animal = Data.find(animal => animal.id === parseInt(id) && animal.category.toLowerCase() === category.toLowerCase());
    setAnimalDetails(animal);
  }, [category, id]);
  const [formData, setFormData] = React.useState({
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: '',
    email: '',
    address: ''
  });

  const [errors, setErrors] = React.useState({});
  const [selectedMethod, setSelectedMethod] = React.useState('card');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (formData.cardNumber !== '0001001101111111') {
      newErrors.cardNumber = 'Invalid card number. Please use: 0001 0011 0111 1111';
    }
    
    if (!formData.cardName.trim()) {
      newErrors.cardName = 'Card holder name is required';
    }
    
    if (!formData.expiry.match(/^\d{2}\/\d{2}$/)) {
      newErrors.expiry = 'Please enter a valid expiry date (MM/YY)';
    }
    
    if (!formData.cvv.match(/^\d{3,4}$/)) {
      newErrors.cvv = 'Please enter a valid CVV';
    }
    
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.address.trim()) {
      newErrors.address = 'Billing address is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      toast.success("Payment processed successfully!", {
        position: toast.position.top-right,
        autoClose: 3000, // 3 seconds
      });
      
      
      // toast("Payment processed successfully!");
      navigate(`/adoptly/${category}/${id}/Payment/Payment-Successful`);
    }
  };
  // console.log(animalDetails)
  const shipping = 60.99; // Shipping cost
  const tax = 50.0; // Fixed tax
  
  const totalAmount = animalDetails?.price
    ? parseFloat(animalDetails.price.replace(/,/g, "")) + shipping + tax
    : 0;
  
  console.log(totalAmount); // This will now give the correct total amount
  
  return (

  <div className="body">{animalDetails ?(
    <div className="payment-container">
      <div className="payment-header">
        <h1>Secure Payment</h1>
        <p style={{color: '#666', marginTop: '0.8rem', fontSize: '1.1rem'}}>Complete your purchase securely</p>
      </div>

      <div className="order-summary">
        <h2>Order Summary</h2>
        <div className="summary-item">
          <span>Product Total</span>
          <span>₹{animalDetails.price}</span>
        </div>
        <div className="summary-item">
          <span>Shipping</span>
          <span>₹{shipping.toFixed(2)}</span>
        </div>
        <div className="summary-item">
          <span>Tax</span>
          <span>₹{tax.toFixed(2)}</span>
        </div>
        <div className="summary-item total">
          <span>Total Amount</span>
          <span>₹{totalAmount.toFixed(2)}</span>
        </div>
      </div>

      <div className="payment-methods">
        <div 
          className={`payment-method ${selectedMethod === 'card' ? 'active' : ''}`}
          onClick={() => setSelectedMethod('card')}
        >
          <i className="fas fa-credit-card"></i>
          Credit Card
        </div>
        <div 
          className={`payment-method ${selectedMethod === 'paypal' ? 'active' : ''}`}
          onClick={() => setSelectedMethod('paypal')}
        >
          <i className="fab fa-paypal"></i>
          PayPal
        </div>
      </div>

      <div className="card-icons">
        <i className="fab fa-cc-visa card-icon"></i>
        <i className="fab fa-cc-mastercard card-icon"></i>
        <i className="fab fa-cc-amex card-icon"></i>
        <i className="fab fa-cc-discover card-icon"></i>
      </div>

      <form className="payment-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            className="input-field"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email address"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Card Number</label>
          <input
            type="text"
            name="cardNumber"
            className="input-field"
            value={formData.cardNumber}
            onChange={handleInputChange}
            placeholder="0001 0011 0111 1111"
            maxLength="16"
          />
          {errors.cardNumber && <span className="error">{errors.cardNumber}</span>}
        </div>

        <div className="form-group">
          <label>Card Holder Name</label>
          <input
            type="text"
            name="cardName"
            className="input-field"
            value={formData.cardName}
            onChange={handleInputChange}
            placeholder="Enter cardholder's full name"
          />
          {errors.cardName && <span className="error">{errors.cardName}</span>}
        </div>

        <div className="card-details">
          <div className="form-group">
            <label>Expiry Date</label>
            <input
              type="text"
              name="expiry"
              className="input-field"
              value={formData.expiry}
              onChange={handleInputChange}
              placeholder="MM/YY"
              maxLength="5"
            />
            {errors.expiry && <span className="error">{errors.expiry}</span>}
          </div>

          <div className="form-group">
            <label>CVV</label>
            <input
              type="password"
              name="cvv"
              className="input-field"
              value={formData.cvv}
              onChange={handleInputChange}
              placeholder="123"
              maxLength="4"
            />
            {errors.cvv && <span className="error">{errors.cvv}</span>}
          </div>
        </div>

        <div className="form-group">
          <label>Billing Address</label>
          <textarea
            name="address"
            className="input-field"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Enter your complete billing address"
            rows="3"
          ></textarea>
          {errors.address && <span className="error">{errors.address}</span>}
        </div>

        
       <button type="submit" className="submit-btn" >
  Pay ₹{totalAmount.toFixed(2)} Securely
</button>
{/* <ToastContainer /> */}
      </form>
    </div>
    ) : (
      <p>Animal not found!</p>
    )}

  </div>
  );
};
