import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
          <h3>Arya Setiawan</h3>
        </div>
        <div>
          <ul className="navbar-nav">
            <li><a href="#">Home</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">About me</a></li>
          </ul>
        </div>
        <div className="navbar-button">
            <button> <a href="#">Contact Me</a></button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
