import "./Services.css";

const Services = () => {
  const services = [
    {
      icon: "🌲",
      title: "Forstgrundstück-Bewertung",
      description:
        "Professionelle Bewertung von Waldgrundstücken nach aktuellen Marktstandards",
    },
    {
      icon: "📊",
      title: "Holzvorratsbewertung",
      description:
        "Detaillierte Analyse und Bewertung des stehenden Holzvorrats",
    },
    {
      icon: "🗺️",
      title: "Standortanalyse",
      description:
        "Umfassende Analyse der Standortbedingungen und Wuchspotentiale",
    },
    {
      icon: "📋",
      title: "Gutachten & Berichte",
      description: "Erstellung detaillierter Gutachten für verschiedene Zwecke",
    },
    {
      icon: "💼",
      title: "Kaufberatung",
      description: "Beratung beim Kauf oder Verkauf von Forstgrundstücken",
    },
    {
      icon: "⚖️",
      title: "Gerichtsgutachten",
      description: "Erstellung von Gutachten für gerichtliche Verfahren",
    },
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <h2>Meine Dienstleistungen</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
