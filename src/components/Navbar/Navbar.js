// Navbar.js

import React from "react";
import { FaSun, FaMoon } from "react-icons/fa"; // Assuming you have these icons
import "./Navbar.css";

const Navbar = ({ theme, toggleTheme, language, changeLanguage }) => {
  return (
    <nav className={`navbar ${theme === "dark" ? "dark-theme" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <span>Logo</span>
        </div>
        <div className="navbar-links">
          <a href="#about">About</a>
          <a href="#portfolio">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#resume">Experience</a>
          <a href="#footer">Contact</a>
        </div>
        {/* Light/Dark Theme Button */}
        <button className="theme-button" onClick={toggleTheme}>
          {theme === "light" ? <FaSun /> : <FaMoon />}
        </button>
        {/* Language Setting */}
        <select
          className="language-select"
          value={language}
          onChange={(e) => changeLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="vn">Tiếng Việt</option>
          {/* Add more language options as needed */}
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
