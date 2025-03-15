import React from "react";
import "./Hero.css";
import image from "../../assets/profile_img.svg";
import resume from "../../assets/Ashar_Resume.pdf";

const Hero = ({ sections }) => {
  const handleResumeClick = () => {
    window.open(resume, "_blank");
  };

  const scrollToSection = (id) => {
    if (id && sections[id].current) {
      sections[id].current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <img src={image} alt="" className="heroImg" />
      <h2 className="heroTitle">
        <span>I'm Ashar Farooq </span>, frontend developer based on India.
      </h2>
      <div className="heroDetail">
        I am a frontend developer from India with a strong foundation in
        React.js and web development, eager to apply my skills in a professional
        setting. Although I have no formal work experience, I have completed
        projects and gained hands-on knowledge through self-learning.
      </div>
      <div className="heroBtn">
        <button
          className="connectMe"
          onClick={() => scrollToSection("contact")}
        >
          Connect With Me
        </button>
        <button className="myResume" onClick={handleResumeClick}>
          My Resume
        </button>
      </div>
    </div>
  );
};

export default Hero;
