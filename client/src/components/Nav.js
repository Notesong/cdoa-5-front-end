import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
      <nav id="nav">
        {/* navbar for the website. Mobile version is in Menu.js */}
        <Link to='/'>Home</Link>
        <Link to='/Quiz'>Quiz</Link>
        <Link to='/Scoreboard'>Scoreboard</Link>
        <Link to='/login'><span className="button small">Login</span></Link>
        <Link to='/register'><span className="button small alt">Signup</span></Link>
      </nav>
    )
}

export default Nav;