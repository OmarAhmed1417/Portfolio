import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../imges/logo.e.png';
import gsap from 'gsap';

const Nav = () => {
    let elementRef = useRef();
    let color = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
        setTimeout(() => {
            
            gsap.to(elementRef.current, { opacity: 1, y: 0, duration: 2, ease: 'power3.out',stagger:0.5 });
        }, 500);
    }
     else {
        gsap.to(elementRef.current, { opacity: 0, y: 50, duration: 2, ease: 'power3.out',stagger:0.5 });
    }
    }, [isVisible]);
    
let go=()=>{

  if(window.scrollY===0){
    color.current.style.backgroundColor = 'transparent';
    color.current.style.transition=1+'s';
      }else{
        color.current.style.backgroundColor = 'rgba(0,0,0, 0.4)';
        color.current.style.transition=1+'s';
      }
  }


  return (
    <section className='link'>
      <div className="nav" onScroll={go} ref={color}>
        <div className="header" ref={elementRef}>
          <img src={logo} alt="logo" className='logo' width='250px'  height='auto' loading='lazy' />
        </div>
    
          <div >
          <Link ref={elementRef} to="/view/src/imges/Omar-Ahmed-FlowCV-Cover-Letter-20240619.pdf">
            <button>My Cv</button>
          </Link>
       </div>
      </div>
    </section>
  );
};

export default Nav;
