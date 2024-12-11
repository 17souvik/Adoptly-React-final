import './Gallary.css'
import React from 'react'
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
export default function Gallary() {
 
// gsap.registerPlugin(ScrollTrigger);
// const galleryRef = useRef();
//     useGSAP(()=>{
//           gsap.from(".right-corner" , {
//             x:-500,
//             y:-300,
//             duration:3,
//             repeat:-1,
//             yoyo:true,
//             borderRadius:'50%',
//             scrollTrigger : {
//               trigger:"galleryRef.current",
//               scroller:"body",
//               markers:true,
//               start: "top 50%",
//               end:"top 30%",
//               scrub:2,
//            //    pin:true
//            }
       
//           }) 
       

//           gsap.from(".corner-left" , {
//             x:500,
//             y:-300,
//             duration:3,
//             repeat:-1,
//             yoyo:true,
//             borderRadius:'50%'
            
//           }) 
      
//           gsap.from(".last-right-corner" , {
//             x:500,
//             y:500,
//             duration:3,
//             repeat:-1,
//             yoyo:true,
//             borderRadius:'50%'
//           }) 

//           gsap.from(".last-left-corner" , {
//             x:-500,
//             y:500,
//             duration:3,
//             repeat:-1,
//             yoyo:true,
//             borderRadius:'50%',
//             // delay:2
//           }) 
      
//     })  

    return(
              
        <>
           <div className="gallary">
            <div className="gallary-img right-corner"  >
                <img src="https://i.pinimg.com/736x/2b/2c/94/2b2c9431fb8e801f62a2616b7a2b6aab.jpg"/>
            </div>
            <div className="gallary-img fast-middle">
                <img src="https://i.pinimg.com/736x/07/4b/67/074b671d31be3977086f27c2a14bbca8.jpg"/>
            </div>
            <div className="gallary-img corner-left">
                 <img src="https://i.pinimg.com/736x/85/6d/13/856d13a655e8005124f5a630d01136f9.jpg"/>
            </div>
            <div className="gallary-img">
            <img src="https://i.pinimg.com/736x/ff/30/dc/ff30dc403e87fca7722b3143c266ea91.jpg"/>
               
            </div>
            <div  className="gallary-img middle-point">
            <img src="https://i.pinimg.com/736x/77/14/42/771442411adb6acc70554888ac4d0c49.jpg"/>
            </div>
            <div className="gallary-img">
            <img src="https://i.pinimg.com/736x/17/fd/0e/17fd0e2ac72c443507ef2c5d8697a590.jpg"/>
            </div>
            <div className="gallary-img last-left-corner">
            <img src="https://i.pinimg.com/736x/d4/9e/5b/d49e5bca56b4d7d0630a8a9a9c8fc8c1.jpg"/>
            </div>
            <div className="gallary-img">
            <img src="https://images.unsplash.com/photo-1497469074122-b9cc3bb29f4b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            </div>

            <div className="gallary-img last-right-corner">
            <img src="https://i.pinimg.com/736x/45/40/da/4540daf5172b37928ecec4b67864b8e7.jpg"/>
            </div>
           </div>

           <div className="gallary-part2">
            <div className="gallary-part2-img1">
                 <h1>"Adopt the color of kindness <br/>into their lives."</h1>
            </div>
            <div className="gallary-part2-img2">
                <h1>"Providing warmth and care,<br/> not just for people but for every soul."</h1>
            </div>
           </div>
        </>
    )
}