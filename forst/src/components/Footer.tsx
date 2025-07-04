import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Forest Gumz</h3>
            <p>Ihr Experte für Forstbewertung in Schorndorf</p>
          </div>
          <div className="footer-section">
            <h4>Kontakt</h4>
            <p>📧 info@forst-gumz.de</p>
            <p>📞 +49 123 456 789</p>
            <p>📍 Schorndorf, Baden-Württemberg</p>
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
          <p>&copy; 2024 Forest Gumz. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
