import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";
import AnimatedSection from "../common/AnimatedSection";
import { experience } from "../../data/experience";
import "./Experience.css";

const Experience = () => (
  <div className="experience-section">
    <SectionTitle subtitle="Career">Experience</SectionTitle>

    <div className="experience-section__timeline">
      {experience.map((job, index) => (
        <AnimatedSection key={job.role + job.period} delay={index * 0.08}>
          <motion.article
            className="experience-card"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <div className="experience-card__header">
              <div>
                <h3 className="experience-card__role">{job.role}</h3>
                <p className="experience-card__company">{job.company}</p>
              </div>
              <span className="experience-card__period">{job.period}</span>
            </div>
            <ul className="experience-card__list">
              {job.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.article>
        </AnimatedSection>
      ))}
    </div>
  </div>
);

export default Experience;
