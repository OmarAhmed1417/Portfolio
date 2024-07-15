import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import pic from '../imges/mypic.webp';
import placeholder from '../imges/placeholder.jpg'; // Corrected import path
import LazyImageWithPlaceholder from './LazyImageWithPlaceholder';

const Header = () => {
  const textRef = useRef();
  const imageRef = useRef();
  const [textVisible, setTextVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);

  const handleIntersection = (entries, observer, setState) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setState(true);
      } else {
        setState(false);
      }
    });
  };

  useEffect(() => {
    const textObserver = new IntersectionObserver(
      entries => handleIntersection(entries, textObserver, setTextVisible),
      { threshold: 0.1 }
    );

    if (textRef.current) {
      textObserver.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        textObserver.unobserve(textRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const imageObserver = new IntersectionObserver(
      entries => handleIntersection(entries, imageObserver, setImageVisible),
      { threshold: 0.1 }
    );

    if (imageRef.current) {
      imageObserver.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        imageObserver.unobserve(imageRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (textVisible) {
      setTimeout(() => {
        gsap.to(textRef.current, { opacity: 1, y: 0, duration: 2, ease: 'power3.out', stagger: 0.5 });
      }, 500);
    } else {
      gsap.to(textRef.current, { opacity: 0, y: 50, duration: 2, ease: 'power3.out', stagger: 0.5 });
    }
  }, [textVisible]);

  useEffect(() => {
    if (imageVisible) {
      setTimeout(() => {
        gsap.to(imageRef.current, { opacity: 1, y: 0, duration: 2, ease: 'power3.out', stagger: 0.5 });
      }, 700);
    } else {
      gsap.to(imageRef.current, { opacity: 0, y: 50, duration: 1, ease: 'power3.out', stagger: 0.5 });
    }
  }, [imageVisible]);

  return (
    <section className="head">
      <div className="Header">
        <div className="text" ref={textRef} style={{ opacity: 0 }}>
          <h3>Omar Ahmed</h3>
          <h1>FRONTEND DEVELOPER</h1>
          <p>
            Hello, my name is Omar Ahmed. I specialize in front-end development with a focus on React.js and various CSS frameworks. In addition to my expertise in creating dynamic and responsive web interfaces, I also teach C++ and algorithms, sharing my knowledge and passion for programming with others.
          </p>
          <Link to="https://api.whatsapp.com/send?phone=2001062610800" target='_blank'>
            <button>Call Now</button>
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
