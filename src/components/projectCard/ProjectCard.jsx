import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  const handleProject = () => {
    if (project.link) {
      window.open(project.link, "_blank");
    }
  };
  return (
    <div className="ProjectCard" onClick={handleProject}>
      <img src={project.image} alt="" />
    </div>
  );
};

export default ProjectCard;
