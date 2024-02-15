import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div className="Nav">
        <div className="Nav1">
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/education">Education</NavLink>
            <NavLink to="/skill">Skills</NavLink>
            <NavLink to="/contact">Contact Me</NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default Nav;
