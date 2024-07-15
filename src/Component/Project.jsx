/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useRef,useState } from 'react';
import Hotel from '../imges/Hotel (2).webp';
import arch from '../imges/Arcituture.webp';
import placeholder from '../imges/placeholder.jpg'; // Corrected import path
import { Link } from 'react-router-dom';
import LazyImageWithPlaceholder from './LazyImageWithPlaceholder'; // Adjust the import path accordingly
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'; // Import only ScrollTrigger from GSAP
gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

const Projects = () => {
    const elementRef = useRef();
    const elementRef2 = useRef();
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
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
                
                gsap.to(elementRef.current, { opacity: 1, y: 0, duration: 2, ease: 'power3.out' ,stagger:0.5});
            }, 500);
        }
         else {
            gsap.to(elementRef.current, { opacity: 0, y: 50, duration: 2, ease: 'power3.out' ,stagger:0.5});
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
    <section className='project'>
      <div className="section3">
        <h1 className='Title'>My Projects and Freelance</h1>
        <div className="projects">
          <div className="first">
            <div className="hotel" ref={elementRef}>
              <Link to="https://hotel-camp.vercel.app/" target='_blank' rel="noreferrer">
                <LazyImageWithPlaceholder
                  src={Hotel}
                  alt="Hotel"
                  placeholder={placeholder}
                  // width={'400px'}
                  // height={'auto'}

                />
              </Link>
            </div>
            <div className='icons'>
              <Link to="https://hotel-camp.vercel.app/" target='_blank' rel="noreferrer">
                <i className="fa-solid fa-link"></i>
              </Link>
            </div>
          </div>

          <div className="second">
            <div className="hotel"  ref={elementRef2}>
              <Link to="https://creative-architecture.vercel.app/" target='_blank' rel="noreferrer">
                <LazyImageWithPlaceholder
                  src={arch}
                  alt="Architecture"
                  placeholder={placeholder}
                  width={'400px'}
                  height={'auto'}
                />
              </Link>
            </div>
            <div className='icons'>
              <Link to="https://creative-architecture.vercel.app/" target='_blank' rel="noreferrer">
                <i className="fa-solid fa-link"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
