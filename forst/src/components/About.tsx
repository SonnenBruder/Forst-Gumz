import React from "react";
import "./About.css";
import ProfilBild from "../assets/Images/FredGumz.webp";

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>Über mich</h2>
            <h3 className="name-title">Friedemann Gumz</h3>
            <p className="description">
              Als erfahrener Forstexperte in Schorndorf, Baden-Württemberg,
              bringe ich umfassende Kenntnisse in der Bewertung von
              Forstgrundstücken mit. Meine Expertise basiert auf jahrelanger
              Praxis und fundiertem Fachwissen über die regionalen
              Gegebenheiten.
            </p>
            <div className="qualifications">
              <h3>Qualifikationen</h3>
              <ul>
                <li>Diplom-Ingenieur (FH) Forstwirtschaft</li>
                <li>Zertifizierter Steuerberater</li>
                <li>Langjährige Erfahrung in der Region</li>
                <li>Spezialisierung auf Waldgrundstücke</li>
                <li>Unabhängige Beratung</li>
              </ul>
            </div>
          </div>
          <div className="about-image">
            <img
              src={ProfilBild}
              alt="Friedemann Gumz"
              className="profile-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
