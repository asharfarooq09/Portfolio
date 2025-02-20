import React from "react";
import "./Hero.css";
import image from "../../assets/profile_img.svg";

const Hero = () => {
  return (
    <div className="hero">
      <img src={image} alt="" className="heroImg" />
      <h2 className="heroTitle">
        <span>I'm Ashar Farooq </span>, frontend developer based on India.
      </h2>
      <div className="heroDetail">
      I am a frontend developer from India with a strong foundation in React.js and web development, eager to apply my skills in a professional setting. Although I have no formal work experience, I have completed projects and gained hands-on knowledge through self-learning.
      </div>
      <div className="heroBtn">
        <button className="connectMe">Connect With Me</button>
        <button className="myResume">My Resume</button>
      </div>
    </div>
  );
};

export default Hero;