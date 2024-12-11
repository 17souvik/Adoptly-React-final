import { useState } from 'react'
import Routers from './ADOP/Routers'
import './App.css'
import Navbar from './ADOP/Navbar/Navbar'
import Footer from './ADOP/FooterPage/Footer'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
function App() {
  

  return (
    <>
      <Navbar/>
      <Routers/>
      <Footer/>
     
    </>
  )
}

export default App
