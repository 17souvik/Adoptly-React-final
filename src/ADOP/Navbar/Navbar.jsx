import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
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
       
      </ul>
      </div>
     
    </div>
  );
}
