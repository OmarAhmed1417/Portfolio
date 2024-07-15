import React, { useEffect, useRef } from 'react';
const Loader = () => {
    let ref=useRef();
    useEffect(()=>{
        
            // setTimeout(() => {
                
            // }, 3500);
                setTimeout(() => {
                    ref.current.style.transform = 'translateX(0%)';
                    ref.current.style.transition = 1+'s';
            },1500);
            setTimeout(() => {
                ref.current.style.transform = 'translateX(100%)';
                ref.current.style.transition = 1.5+'s';
            },3000);
            
        },[])
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