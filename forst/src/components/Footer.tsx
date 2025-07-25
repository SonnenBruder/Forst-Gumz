import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Friedemann Gumz</h3>
            <p>Ihr Experte für Forstbewertung in Schorndorf</p>
          </div>
          <div className="footer-section">
            <h4>Kontakt</h4>
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <span className="contact-label">E-Mail:</span>
              <span className="contact-value">fredgumz@googlemail.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <span className="contact-label">Telefon:</span>
              <span className="contact-value">07181/2579517</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <span className="contact-label">Mobil:</span>
              <span className="contact-value">0172/3127810</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span className="contact-label">Adresse:</span>
              <span className="contact-value">
                Karlstraße 19, 73614 Schorndorf
              </span>
            </div>
          </div>
          <div className="footer-section">
            <h4>Rechtliches</h4>
            <ul>
              <li>
                <a href="#impressum">Impressum</a>
              </li>
              <li>
                <a href="#datenschutz">Datenschutz</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Forst Gumz. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
