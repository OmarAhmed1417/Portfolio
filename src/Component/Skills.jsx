/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const paragraphsRef = useRef([]);

  useEffect(() => {
    const observers = paragraphsRef.current.map((paragraph) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.to(paragraph, { opacity: 1, x: 0, duration: 2, ease: 'power3.out' });
            } else {
              gsap.to(paragraph, { opacity: 0, x: -100, duration: 1, ease: 'power3.out' });
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(paragraph);

      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (paragraphsRef.current[index]) {
          observer.unobserve(paragraphsRef.current[index]);
        }
      });
    };
  }, []);

  useEffect(() => {
    paragraphsRef.current.forEach((paragraph) => {
      gsap.to(paragraph, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: paragraph,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    });
  }, []);

  return (
    <section className='aboutme'>
      <div className="skills">
        <h1 className='Title'>Skills</h1>
        <div className="scale">
          <div className="first">
            <p ref={(el) => (paragraphsRef.current[0] = el)}>Html</p>
            <p ref={(el) => (paragraphsRef.current[1] = el)}>Git & GitHub</p>
            <p ref={(el) => (paragraphsRef.current[2] = el)}>JavaScript</p>
            <p ref={(el) => (paragraphsRef.current[3] = el)}>Bootstrap</p>
            <p ref={(el) => (paragraphsRef.current[4] = el)}>Tailwind</p>
          </div>
          <div className="second">
            <p ref={(el) => (paragraphsRef.current[5] = el)}>Sass</p>
            <p ref={(el) => (paragraphsRef.current[6] = el)}>CSS</p>
            <p ref={(el) => (paragraphsRef.current[7] = el)}>Jest JS</p>
            <p ref={(el) => (paragraphsRef.current[8] = el)}>C++</p>
            <p ref={(el) => (paragraphsRef.current[9] = el)}>Clean Code</p>
          </div>
          <div className="third">
            <p ref={(el) => (paragraphsRef.current[10] = el)}>React JS</p>
            <p ref={(el) => (paragraphsRef.current[11] = el)}>Gulp JS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
