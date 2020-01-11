import React from "react";
import { NavLink } from "react-router-dom";

// Basic syntax from: https://codesandbox.io/s/lpo41x20kq
// this menu is used only for the mobile version of the website
// Regular navbar is in Nav.js

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