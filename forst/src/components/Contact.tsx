import React, { useState } from "react";
import "./Contact.css";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulardaten:", formData);
    alert(
      "Vielen Dank für Ihre Nachricht! Ich werde mich schnellstmöglich bei Ihnen melden."
    );
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleCall = () => {
    window.location.href = "tel:+4971812579517";
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Kontakt aufnehmen</h2>
        <p className="contact-intro">
          Haben Sie Fragen zu meinen Leistungen? Möchten Sie ein unverbindliches
          Angebot für eine Waldbewertung? Kontaktieren Sie mich gerne!
        </p>

        <div className="contact-options">
          <div className="contact-option">
            <div className="option-icon">📞</div>
            <h3>Sofort sprechen</h3>
            <p>Rufen Sie mich direkt an für eine schnelle Beratung</p>
            <button className="call-button" onClick={handleCall}>
              07181 / 2579517 anrufen
            </button>
          </div>

          <div className="contact-option">
            <div className="option-icon">✉️</div>
            <h3>Nachricht hinterlassen</h3>
            <p>Schreiben Sie mir eine Nachricht - ich melde mich zurück</p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Telefon</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">E-Mail *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Ihre Nachricht *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">
                Nachricht senden
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
