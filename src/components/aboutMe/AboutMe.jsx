import React from "react";
import theme from "../../assets/theme_pattern.svg";
import profile from "../../assets/about_profile.svg";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="aboutMe">
      <div className="aboutTitle">
        <h2>About Me</h2>
        <img src={theme} alt="" />
      </div>
      <div className="aboutDetail">
        <div className="detailsLeft">
          <img className="img" src={profile} alt="" />
        </div>
        <div className="detailsRight">
          <div className="detailPara">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
              fugit porro odit architecto! Reprehenderit exercitationem dicta
              sed ad suscipit perspiciatis est velit quasi, cupiditate magni.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolores voluptatem exercitationem pariatur assumenda
              minima.
            </p>
          </div>
          <div className="detailSkills">
            <div className="detailSkill">
              <p>HTML & CSS</p> <hr style={{ width: "50%" }}></hr>
            </div>
            <div className="detailSkill">
              <p>JAVASCRIPT</p> <hr style={{ width: "70%" }}></hr>
            </div>
            <div className="detailSkill">
              <p>REACTJS</p> <hr style={{ width: "50%" }}></hr>
            </div>
            <div className="detailSkill">
              <p>REDUX</p> <hr style={{ width: "50%" }}></hr>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutExperience">
        <div className="experience">
          <p className="number">10+</p>
          <p className="para">YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="projects">
          <p className="number">10+</p>
          <p className="para">PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="clients">
          <p className="number">10+</p>
          <p className="para">HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
