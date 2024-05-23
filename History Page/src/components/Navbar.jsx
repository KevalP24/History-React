import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar" id="navbar">
      <ul className="nav" id="navList">
        <li><a href="#home" id="homeLink">Home</a></li>
        <li><a href="#about" id="aboutLink">About</a></li>
        <li><a href="#services" id="servicesLink">Services</a></li>
        <li><a href="#contact" id="contactLink">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
