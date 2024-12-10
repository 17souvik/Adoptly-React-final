import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import ShowPage from './Display/ShowPage';
import Home from './HomePage/Home';
import Animal from './indiAnimal/Animal';

export default function Routers() {
    return (
        <Routes>
           
           
            <Route path="/" element={<Navigate to="/adoptly" />} />

         
            <Route path="/adoptly" element={<Home />} />

     
            <Route path="/adoptly/:category" element={<ShowPage />} />

          
            <Route path="/adoptly/:category/:id" element={<Animal />} />
        </Routes>
    );
}
