import React, { useEffect, useRef,useState } from 'react';
import gsap from 'gsap';
const Loader = () => {
    let ref=useRef();
    // useEffect(()=>{
        
    //         // setTimeout(() => {
                
    //         // }, 3500);
    //             setTimeout(() => {                
    //             ref.current.style.transform = 'translateX(0%)';
    //             ref.current.style.transition = 1+'s';
    //         },1500);
    //         setTimeout(() => {
    //             ref.current.style.transform = 'translateX(-100%)';
    //             ref.current.style.transition = 1+'s';
    //             // ref.current.style.overflowX = 'hidden';
    //             ref.current.style.overflow = 'hidden';
    //         },3000);
    //         setTimeout(()=>{
    //             ref.current.style.display = 'none';

    //         },4000)
            
    //     },[])


  
    useEffect(() => {
      
          setTimeout(() => {
              
              gsap.to(ref.current, {  x: '0%', duration: 1, ease:'power3.out',stagger:0.5 });
          }, 1000);
      setTimeout(() => {
          
          gsap.to(ref.current, {  x: '-100%', duration: 1.5   , ease: 'bounce',});
          
        }, 3000);
        }, []);
    return ( <>
    <div className="loading" ref={ref}>
        <div>
        <p>Omar</p>
        </div>
        <div>
         <p>Ahmed</p>
        </div>
        <div>
         
          <p> Omar</p>
        </div>
    </div>
    </> 
    );
}
 
export default Loader;