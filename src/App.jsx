import { useRef } from "react";
import "./App.css";
import AboutMe from "./components/aboutMe/AboutMe";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/projects/Projects";
import Services from "./components/services/Services";

function App() {
  const sections = {
    home: useRef(null),
    about: useRef(null),
    experience: useRef(null),
    services: useRef(null),
    portfolio: useRef(null),
    contact: useRef(null),
  };

  return (
    <div className="app">
      <div className="app__bg" aria-hidden="true">
        <div className="app__bg-orb app__bg-orb--1" />
        <div className="app__bg-orb app__bg-orb--2" />
      </div>

      <Navbar sections={sections} />

      <main className="container">
        <section ref={sections.home} id="home" className="section">
          <Hero sections={sections} />
        </section>
        <section ref={sections.about} id="about" className="section">
          <AboutMe />
        </section>
        <section ref={sections.experience} id="experience" className="section">
          <Experience />
        </section>
        <section ref={sections.services} id="services" className="section">
          <Services />
        </section>
        <section ref={sections.portfolio} id="portfolio" className="section">
          <Portfolio />
        </section>
        <section ref={sections.contact} id="contact" className="section">
          <Contact />
        </section>
      </main>

      <Footer sections={sections} />
    </div>
  );
}

export default App;
