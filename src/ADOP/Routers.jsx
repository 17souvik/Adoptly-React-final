import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ShowPage from './Display/ShowPage';
import Home from './HomePage/Home';
import Animal from './indiAnimal/Animal';
import Login from './Navbar/Login';
import SearchBar from './Navbar/SearchBar';
import Payment from './PaymentPage/Payment';
import PaymentSuc from './PaymentPage/PaymentSuc';
export default function Routers() {
    return (
        <Routes>
           
           
            <Route path="/" element={<Navigate to="/adoptly" />} />

         
            <Route path="/adoptly" element={<Home />} />

            <Route path="/adoptly/Login" element={<Login/>} />
            
            <Route path="/adoptly/Search" element={<SearchBar/>} />


     
            <Route path="/adoptly/:category" element={<ShowPage />} />

          
            <Route path="/adoptly/:category/:id" element={<Animal />} />

            <Route path="/adoptly/:category/:id/Payment" element={<Payment/>} />

            <Route path="/adoptly/:category/:id/Payment/Payment-Successful" element={<PaymentSuc/>} />
        </Routes>
    );
}
