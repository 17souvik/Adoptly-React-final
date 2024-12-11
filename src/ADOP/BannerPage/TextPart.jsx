import './TextPart.css'
import React from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
const TextPart = () => {

   useGSAP(() => {
   

     gsap.from(".one" ,{
        x:-900,
        opacity:0,
        duration:3,
        ease:'back.inOut',
             
             
     })

     gsap.from(".two" ,{
        x:900,
        opacity:0,
        duration:3,

        ease: 'back.inOut',
       
     })

   })

  return (
    <div className='main-text'>
         <div className="text">
            <p className='one' style={{color:"#1A1A1D;",  paddingLeft:"30px"}}> "Saving one animal won't change the world,</p>
            <p className='two' style={{color:"#1A1A1D;" }}> but it will change the world for that one animal." </p>
         </div>
         <div className="image-part">
            <img src='https://i.pinimg.com/736x/0d/3b/49/0d3b492aead5d49c3d6c7f7341f1fef3.jpg' alt='img' />
         </div>
    </div>
  )
}

export default TextPart
