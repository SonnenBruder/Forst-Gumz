import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseMe from "./components/WhyChooseMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Impressum from "./components/Impressum";

// Hauptseite Komponente
const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChooseMe />
      <Contact />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route
              path="/datenschutz"
              element={<div>Datenschutz-Seite (Coming Soon)</div>}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
