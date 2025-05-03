import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="NavBar">
        <div className="container">
          <div className="navRow">
            <div className="navLogo">
              <img src="Images/menu_logo.png" alt="logo" />

            </div>
            <div className="navMenu">
              <ul>
                <li><Link to={''}>Home</Link></li>
                <li><Link to={''}>About Us</Link></li>
                <li><Link to={''}>Latest News</Link></li>
                <li><Link to={''}>Contact</Link></li>
                <li><Link to={''}>Activities</Link></li>

              </ul>

            </div>
            <div className="navButton">
              <button>Get Started</button>

            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
