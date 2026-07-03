import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./ProjectCard.css";

const ProjectCard = ({ project, index }) => {
  const handleProject = () => {
    if (project.link) window.open(project.link, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      whileHover={{ y: -8 }}
      onClick={handleProject}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleProject()}
    >
      <div className="project-card__image-wrap">
        <img
          src={project.image}
          alt={project.title}
          className="project-card__image"
          loading="lazy"
        />
        <div className="project-card__overlay">
          <FaExternalLinkAlt />
          <span>View Live</span>
        </div>
      </div>
      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>
        <div className="project-card__tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-card__tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
