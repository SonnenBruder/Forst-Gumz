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
    // Hier würden Sie normalerweise die Formulardaten verarbeiten
    console.log("Formulardaten:", formData);
    alert(
      "Vielen Dank für Ihre Nachricht! Ich werde mich schnellstmöglich bei Ihnen melden."
    );
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Kontakt</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Kontaktinformationen</h3>
            <div className="contact-item">
              <strong>📧 E-Mail:</strong>
              <a href="mailto:info@Friedemann-gumz.de">
                info@Friedemann-gumz.de
              </a>
            </div>
            <div className="contact-item">
              <strong>📞 Telefon:</strong>
              <a href="tel:+49123456789">+49 123 456 789</a>
            </div>
            <div className="contact-item">
              <strong>📍 Standort:</strong>
              <span>Schorndorf, Baden-Württemberg</span>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
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
              <label htmlFor="phone">Telefon</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Nachricht *</label>
              <textarea
                id="message"
                name="message"
                rows={5}
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
    </section>
  );
};

export default Contact;
