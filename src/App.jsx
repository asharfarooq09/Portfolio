import { useRef } from "react";
import "./App.css";
import AboutMe from "./components/aboutMe/AboutMe";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/projects/Projects";
import Services from "./components/services/Services";

function App() {
  const sections = {
    home: useRef(null),
    about: useRef(null),
    services: useRef(null),
    portfolio: useRef(null),
    contact: useRef(null),
  };

  return (
    <>
      <Navbar sections={sections} />
      <div className="container">
        <div ref={sections.home} id="home">
          <Hero sections={sections} />
        </div>
        <div ref={sections.about} id="about">
          <AboutMe />
        </div>
        <div ref={sections.services} id="services">
          <Services />
        </div>
        <div ref={sections.portfolio} id="portfolio">
          <Portfolio />
        </div>
        <div ref={sections.contact} id="contact">
          <Contact />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
