import React from "react";
import "./WhyChooseMe.css";

const WhyChooseMe: React.FC = () => {
  const advantages = [
    {
      icon: "🎯",
      title: "Lokale Expertise",
      description:
        "Fundierte Kenntnisse der regionalen Gegebenheiten in Baden-Württemberg",
    },
    {
      icon: "🤝",
      title: "Unabhängige Beratung",
      description:
        "Neutrale und objektive Bewertungen ohne Interessenskonflikte",
    },
    {
      icon: "💎",
      title: "Transparente Prozesse",
      description:
        "Nachvollziehbare Bewertungsmethoden und offene Kommunikation",
    },
    {
      icon: "⚡",
      title: "Schnelle Bearbeitung",
      description: "Zügige Abwicklung Ihrer Bewertungsaufträge",
    },
  ];

  return (
    <section className="why-choose-me">
      <div className="container">
        <h2>Warum Forest Gumz wählen?</h2>
        <div className="advantages-grid">
          {advantages.map((advantage, index) => (
            <div key={index} className="advantage-card">
              <div className="advantage-icon">{advantage.icon}</div>
              <h3>{advantage.title}</h3>
              <p>{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
