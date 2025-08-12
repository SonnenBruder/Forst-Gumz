import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import BaumIcon from "../assets/Images/BaumIcon.png";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <div className="logo">
            <img src={BaumIcon} alt="Forest Gumz Logo" className="logo-icon" />
            <h2>Forest Gumz</h2>
          </div>
        </Link>
        <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
          <ul>
            <li>
              <a href="#home" onClick={() => scrollToSection("home")}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => scrollToSection("about")}>
                Über mich
              </a>
            </li>
            <li>
              <a href="#services" onClick={() => scrollToSection("services")}>
                Dienstleistungen
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => scrollToSection("contact")}>
                Kontakt
              </a>
            </li>
          </ul>
        </nav>
        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
