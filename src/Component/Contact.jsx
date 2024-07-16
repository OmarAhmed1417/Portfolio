import React from 'react';
import logo from '../imges/logo.e.png'
import { Link } from 'react-router-dom';

const Contact = () => {
    return ( <>
    <section className='Contact'>
        <div className="container">

        <div className="email">
            <p>Do you have a project in mind?</p>
            <h2>Contact me!</h2>
            <h1>omarahmedramdan77@gmail.com</h1>
        </div>
        <div className="icons">
            <div className='name'>

           <h2>Omar Ahmed</h2>
            </div>
            <div className="contactme">
                <Link to="https://www.linkedin.com/in/omar-ahmed-33a467298/" target='blank'>
                
            <i className="fa-brands fa-linkedin"></i>
                </Link>
                <Link to="https://www.facebook.com/profile.php?id=100028334143840&mibextid=ZbWKwL" target='blank'>
            <i className="fa-brands fa-facebook"></i>
                </Link>
                <Link to="https://api.whatsapp.com/send?phone=2001062610800" target='blank'>
            <i className="fa-brands fa-whatsapp"></i>
          </Link>
            </div>
        </div>
        </div>

    </section>
   
    </>
     );
}
 
export default Contact;