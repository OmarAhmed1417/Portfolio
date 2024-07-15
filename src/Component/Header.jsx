import React, { useEffect, useRef, useState } from 'react';
import pic from '../imges/mypic.webp';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import placeholder from '../imges/placeholder.jpg'; // Corrected import path

import LazyImageWithPlaceholder from './LazyImageWithPlaceholder';
const Header = () => {
    const elementRef2 = useRef();
    const [isVisible2, setIsVisible2] = useState(false);
    const elementRef = useRef();
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
    

    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setIsVisible2(true);
              } else {
                setIsVisible2(false);
              }
            });
          },
          { threshold: 0.1 }
        );
    
        if (elementRef2.current) {
          observer.observe(elementRef2.current);
        }
    
        return () => {
          if (elementRef2.current) {
            observer.unobserve(elementRef2.current);
          }
        };
      }, []);
    
    
    
      useEffect(() => {
        if (isVisible2) {
            setTimeout(() => {
                
                gsap.to(elementRef2.current, { opacity: 1, y: 0, duration: 2, ease: 'power3.out',stagger:0.5 });
            }, 700);
        }
         else {
            gsap.to(elementRef2.current, { opacity: 0, y: 50, duration: 1, ease: 'power3.out',stagger:0.5 });
        }
        }, [isVisible2]);
    
  return (
    <section className="head">
      <div className="Header">
        {/* My self */}
        <div className="text" ref={elementRef} style={{ opacity: 0 }}>
          <h3>Omar Ahmed</h3>
          <h1>FRONTEND DEVELOPER</h1>
          <p>
            Hello, my name is Omar Ahmed. I specialize in front-end development with a focus on React.js and various CSS frameworks. In addition to my expertise in creating dynamic and responsive web interfaces, I also teach C++ and algorithms, sharing my knowledge and passion for programming with others.
          </p>
          <Link to="https://api.whatsapp.com/send?phone=2001062610800" target='blank'>
            <button>Call Now </button>
          </Link>
        </div>
        {/* my image */}
        <div className="pic" ref={elementRef2}>
        <LazyImageWithPlaceholder
                  src={pic}
                  alt="pic"
                  placeholder={placeholder}
                  width={'400px'}
                  height={'auto'}
                />
        </div>
      </div>
    </section>
  );
};

export default Header;
