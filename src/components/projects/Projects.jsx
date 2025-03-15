import React from "react";
import theme from "../../assets/theme_pattern.svg";
import "./Projects.css";
import ProjectCard from "../projectCard/ProjectCard";
import { Allprojects } from "./constant";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projectsTitle">
        <h2>My Latest Work</h2>
        <img src={theme} alt="" />
      </div>
      <div className="projectsDetail">
        {Allprojects.map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
