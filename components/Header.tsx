import "../css/Header.css";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-section">
        <div className="logo"></div>
        <div>
          <div className="title">QUEZON CITY UNIVERSITY</div>
        </div>
      </div>
      <nav className="nav">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/admissions">ADMISSIONS</Link>
        <Link to="/academics">ACADEMICS</Link>
        <Link to="/joybot">JoyBOT</Link>
      </nav>
    </header>
  );
};

export default Header;
