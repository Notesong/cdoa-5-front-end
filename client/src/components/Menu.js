import React from "react";
import { NavLink } from "react-router-dom";

// Basic syntax from: https://codesandbox.io/s/lpo41x20kq

export default ({ close }) => (
  <div menu="menu">
    <ul>
      <li>
        <NavLink onClick={close} className="menu_item" activeClassName="current" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink onClick={close} className="menu_item" activeClassName="current" to="Quiz">
          Quiz
        </NavLink>
      </li>
      <li>
        <NavLink onClick={close} className="menu_item" activeClassName="current" to="Scoreboard">
          Scoreboard
        </NavLink>
      </li>
      <li>
        <NavLink onClick={close} className="menu_item" activeClassName="current" to="login">
          Login
        </NavLink>
      </li>
      <li>
        <NavLink onClick={close} className="menu_item" activeClassName="current" to="register">
          Signup
        </NavLink>
      </li>
    </ul>
  </div>
);


{/* <nav id="nav">
<Link to='/'>Home</Link>
<Link to='/Quiz'>Quiz</Link>
<Link to='/Scoreboard'>Scoreboard</Link>
<Link to='/login'><span className="button small">Login</span></Link>
<Link to='/register'><span className="button small alt">Signup</span></Link>
</nav> */}