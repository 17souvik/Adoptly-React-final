import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
// const handleSignUpClick = () => {
//   setIsLoginActive(true);
//   console.log("True");
// };
export default function Navbar() {
  return (
    <>
    <div className="navbar">
     <div className="logo">
     <h1 className="logo">Adoptly</h1>
     </div>
      <div className="nav-options">
      <ul className="nav-links">
        <li>
          <Link to="/adoptly">Home</Link>
        </li>
        <li>
          <Link to="/adoptly/Cat">Cats</Link>
        </li>
        <li>
          <Link to="/adoptly/Dog">Dogs</Link>
        </li>
       
        <li>
          <Link to="/adoptly/Rabbit">Rabbit</Link>
        </li>
        <li>
          <Link to="/adoptly/Help">Help</Link>
        </li>
        <li>
          
          <div className="search-container">
          <Link to="/adoptly/Search">
          <svg className="search-icon" viewBox="0 0 24 24" >
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
          </Link>
        </div>
        
       

        </li>
        <li>
        <Link to='/adoptly/login' > <button className="signup-btn" >Sign Up</button></Link>  
  
        </li>
       
      </ul>

      </div>
    </div>
    
     <div >
       <h1>Hello</h1> 
       <h5>Hello</h5> 
     </div>
     </>
  );
}
