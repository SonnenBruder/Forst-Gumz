import React, { useState } from "react";
import "./Contact.css";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ...existing code...

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitting(true);
    try {
      const res = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          botField: "",
        }),
      });
      if (!res.ok) {
        const info = await res.text();
        throw new Error(info);
      }
      setFormData({ name: "", email: "", phone: "", message: "" });
      alert("Vielen Dank! Ihre Nachricht wurde gesendet.");
    } catch (err) {
      console.error(err);
      alert("Fehler beim Senden. Bitte später erneut versuchen.");
    } finally {
      setIsSubmitting(false);
    }
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
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
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
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
                ></textarea>
              </div>
              <button
                type="submit"
                className={`submit-button ${isSubmitting ? "submitting" : ""}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
