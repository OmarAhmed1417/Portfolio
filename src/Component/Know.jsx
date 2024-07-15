import React, { useEffect, useRef, useState } from 'react';
import pic from '../imges/mypic.webp';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Know = () => {
  const email = 'omarahmedramdan77@gmail.com';
  const subject = 'Hello';
  const body = 'I would like to get some information from you.';
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  // Use array to store multiple refs
  const elementsRef = useRef([]);
  const [visibleStates, setVisibleStates] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          setVisibleStates((prev) => {
            const newStates = [...prev];
            newStates[index] = entry.isIntersecting;
            return newStates;
          });
        });
      },
      { threshold: 0.1 }
    );

    elementsRef.current.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      elementsRef.current.forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  useEffect(() => {
    elementsRef.current.forEach((element, index) => {
      if (visibleStates[index]) {
        setTimeout(() => {
          gsap.to(element, { opacity: 1, y: 0, duration: 2, ease: 'power3.out', stagger: 0.5 });
        }, index * 200); // Adjust the delay based on the index
      } else {
        gsap.to(element, { opacity: 0, y: 50, duration: 1, ease: 'power3.out', stagger: 0.5 });
      }
    });
  }, [visibleStates]);


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
    

  return (
    <>
      <section className='myself'>
        <div className="container">
          <h1 className='Title'>Get to know me</h1>
          <div className="information">
            <div className="pic2" ref={(el) => (elementsRef.current[0] = el)} style={{ opacity: 0, transform: 'translateY(50px)' }}>
              <img
                src={pic}
                alt="My image"
                width="300px"
                height="auto"
                loading="lazy"
              />
            </div>
            <div className="about" ref={elementRef} style={{ opacity: 0, transform: 'translateY(50px)' }}>
              <p>
                I am an accomplished frontend developer with two years of experience, specializing in creating responsive and user-friendly web applications using HTML, CSS, JavaScript, and React.js. My role as a coach in the Competitive Programming Community (CPC) reflects my strong problem-solving abilities, particularly with C++. I mentor students and peers, sharing my expertise in algorithms and data structures to help them excel in programming contests. My competitive programming skills are further demonstrated by my qualification for the Egyptian Collegiate Programming Contest (ECPC), where I showcased my ability to tackle complex algorithmic challenges.

                In addition to my technical skills, I am a dedicated leader, currently serving as the Team Leader for Frontend Development at the Google Developer Student Clubs (GDSC) at the High Obour Institute. In this role, I manage a team of developers, ensuring that we deliver high-quality projects on time. My responsibilities include coordinating development efforts, maintaining code standards, and fostering a collaborative team environment. I work closely with other teams, such as backend and design, to ensure that our projects are cohesive and functional.

                Through my coaching and leadership roles, I have successfully guided numerous students in improving their problem-solving skills and have led my team in completing various frontend development projects. My professional goals include continuing to advance my skills in frontend development by exploring new technologies and frameworks, participating in more advanced competitive programming contests, and seeking opportunities to lead larger teams and work on more complex and impactful projects.
              </p>

              <a href={mailtoLink} target='_blank' rel="noopener noreferrer">
                <button>Call Me</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Know;
