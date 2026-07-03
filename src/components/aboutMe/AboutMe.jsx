import { motion } from "framer-motion";
import Portfolio_image from "../../assets/Portfolio_image.jpeg";
import SectionTitle from "../common/SectionTitle";
import AnimatedSection from "../common/AnimatedSection";
import { siteConfig } from "../../data/site";
import { skills } from "./constant";
import "./AboutME.css";

const SkillBar = ({ skill, rating, index }) => (
  <motion.div
    className="skill"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.08, duration: 0.4 }}
  >
    <div className="skill__header">
      <span className="skill__name">{skill}</span>
      <span className="skill__percent">{rating}%</span>
    </div>
    <div className="skill__track">
      <motion.div
        className="skill__fill"
        initial={{ width: 0 }}
        whileInView={{ width: `${rating}%` }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08 + 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  </motion.div>
);

const AboutMe = () => (
  <div className="about">
    <SectionTitle subtitle="Who I am">About Me</SectionTitle>

    <div className="about__grid">
      <AnimatedSection className="about__image-col">
        <div className="about__image-frame">
          <img
            src={Portfolio_image}
            alt={`${siteConfig.name} working`}
            className="about__image"
            loading="lazy"
            width={320}
            height={400}
          />
          <div className="about__image-accent" />
        </div>
      </AnimatedSection>

      <AnimatedSection className="about__content" delay={0.1}>
        <div className="about__text">
          {siteConfig.bio.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="about__skills">
          {skills.map((s, i) => (
            <SkillBar key={s.skill} skill={s.skill} rating={s.rating} index={i} />
          ))}
        </div>
      </AnimatedSection>
    </div>

    <AnimatedSection className="about__stats" delay={0.15}>
      {siteConfig.stats.map((stat, i) => (
        <div key={stat.label} className="about__stat">
          {i > 0 && <div className="about__stat-divider" />}
          <span className="about__stat-value accent-text">{stat.value}</span>
          <span className="about__stat-label">{stat.label}</span>
        </div>
      ))}
    </AnimatedSection>
  </div>
);

export default AboutMe;
