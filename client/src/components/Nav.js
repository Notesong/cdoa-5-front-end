import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
      <nav>
 
        <Link to='/Quiz'>Quiz</Link>
       {/* only displayed if logged in */}
        <Link to='/scoreboard'>Scoreboard</Link>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Signup</Link>
      </nav>
    )
}

export default Nav;