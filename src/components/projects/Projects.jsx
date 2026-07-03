import SectionTitle from "../common/SectionTitle";
import ProjectCard from "../projectCard/ProjectCard";
import { Allprojects } from "./constant";
import "./Projects.css";

const Projects = () => (
  <div className="projects">
    <SectionTitle subtitle="Featured work">My Latest Work</SectionTitle>
    <div className="projects__grid">
      {Allprojects.map((project, index) => (
        <ProjectCard key={project.title} project={project} index={index} />
      ))}
    </div>
  </div>
);

export default Projects;
