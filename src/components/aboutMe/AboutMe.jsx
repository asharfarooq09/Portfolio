import React from "react";
import theme from "../../assets/theme_pattern.svg";
import Portfolio_image from "../../assets/Portfolio_image.jpeg";
import "./AboutMe.css";
import { skills } from "./constant";
import {Allprojects} from "../projects/constant.js"

const AboutMe = () => {
  return (
    <div className="aboutMe">
      <div className="aboutTitle">
        <h2>About Me</h2>
        <img src={theme} alt="" />
      </div>
      <div className="aboutDetail">
        <div className="detailsLeft">
          <img className="img" src={Portfolio_image} alt="" />
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
            {skills.map((s, index) => {
              return (
                <div className="detailSkill" key={index}>
                  <p>{s.skill}</p> <hr style={{ width: s.rating }}></hr>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="aboutExperience">
        <div className="experience">
          <p className="number">10+</p>
          <p className="para">YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="totalProjects">
          <p className="number">{Allprojects.length}</p>
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
