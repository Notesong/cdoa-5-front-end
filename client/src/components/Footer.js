import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => { 
  
  return (
    <div className="AboutUs">
        <footer>
            <h5>&copy;2020 | <Link to='/AboutUs'>About Us</Link> | Attribution</h5>
        </footer>
    </div>
  )
}

export default Footer;