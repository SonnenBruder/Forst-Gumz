import "./Hero.css";
//import ForestHeroImg from "../assets/images/ForestHero.jpg";
import FuchsImg from "../assets/Images/WaldFuchs.webp";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Ihr Experte für Waldbewertungen </h1>
          <p>
            Professionelle Bewertung von Waldbeständen in Baden-Württemberg. Mit
            langjähriger Erfahrung und Know-how biete ich Ihnen zuverlässige und
            transparente Waldbewertungen.
          </p>
          <button className="cta-button" onClick={scrollToContact}>
            Kostenloses Erstgespräch vereinbaren
          </button>
        </div>
        <div className="hero-image-container">
          <img src={FuchsImg} alt="Waldaufnahme" className="hero-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
