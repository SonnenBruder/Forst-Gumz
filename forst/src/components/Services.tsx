import "./Services.css";

const Services = () => {
  const mainServices = [
    {
      icon: "🌲🌲🌲",
      title: "Waldwertgutachten",
      description: "Bestands- und Bodenbewertung nach anerkannten Standards",
    },
    {
      icon: "💰",
      title: "Waldwertermittlungen",
      description:
        "Im Kauf-, Verkauf-, Tausch- und Entschädigungsfall mit forstlicher und steuerlicher Beratung",
    },
  ];

  const additionalServices = [
    {
      icon: "🤝",
      title: "Beratung",
      description: "Umfassende forstliche und steuerliche Beratung",
    },
    {
      icon: "🌳",
      title: "Baumbewertung",
      description: "Einzelbaumbewertung nach aktuellen Methoden",
    },
    {
      icon: "📊",
      title: "Betriebsgutachten",
      description: "Detaillierte Analyse forstlicher Betriebe",
    },
    {
      icon: "🏞️",
      title: "Vermittlung von Waldgrundstücken",
      description: "Professionelle Vermittlung beim Waldkauf und -verkauf",
    },
    {
      icon: "📋",
      title: "Datenerfassung für Kaufvertrag",
      description: "Vollständige Dokumentation für rechtssichere Verträge",
    },
    {
      icon: "⚖️",
      title: "Notartermin",
      description: "Begleitung und Unterstützung bei notariellen Terminen",
    },
  ];

  const principles = [
    {
      icon: "🎯",
      title: "Unabhängige, neutrale & objektive Beratung",
      description: "Kompetente Beratung ohne Interessenskonflikte",
    },
    {
      icon: "⚡",
      title: "Zügige Abwicklung",
      description: "Ihrer Bewertungsaufträge mit höchster Professionalität",
    },
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <h2>Leistungen im Bereich Waldwertermittlung</h2>

        {/* Hauptleistungen */}
        <div className="services-section">
          <h3 className="section-title">Kernleistungen</h3>
          <div className="services-grid main-services">
            {mainServices.map((service, index) => (
              <div key={index} className="service-card main-service">
                <div className="service-icon">{service.icon}</div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Zusätzliche Leistungen */}
        <div className="services-section">
          <h3 className="section-title">Zusätzliche Leistungen</h3>
          <div className="services-grid additional-services">
            {additionalServices.map((service, index) => (
              <div key={index} className="service-card additional-service">
                <div className="service-icon">{service.icon}</div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Allgemeine Grundsätze */}
        <div className="services-section">
          <h3 className="section-title">Allgemeine Grundsätze</h3>
          <div className="services-grid principles">
            {principles.map((principle, index) => (
              <div key={index} className="service-card principle-card">
                <div className="service-icon">{principle.icon}</div>
                <h4>{principle.title}</h4>
                <p>{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
