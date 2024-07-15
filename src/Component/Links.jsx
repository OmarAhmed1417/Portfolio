import React from 'react';
import { Link } from 'react-router-dom';
const Links = () => {
    return ( 
        <>
        <div className="links">

        <ul>
             <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/know">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/Skills">Skills</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
        </div>
        </>
     );
}
 
export default Links;