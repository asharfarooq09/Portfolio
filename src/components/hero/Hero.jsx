import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Hero.css";
import Profile_image from "../../assets/Portfolio_image.jpeg";
import { siteConfig } from "../../data/site";

const RESUME_URL = "/Ashar_Resume.pdf";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

const socialIcons = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Email: MdEmail,
};

const Hero = ({ sections }) => {
  const handleResumeClick = () => window.open(RESUME_URL, "_blank", "noopener,noreferrer");

  const scrollToSection = (id) => {
    sections[id]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero">
      <div className="hero__grid">
        <div className="hero__content">
          <motion.h1
            className="hero__title"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            Hi, I&apos;m{" "}
            <span className="accent-text">{siteConfig.name}</span>
          </motion.h1>

          <motion.p className="hero__subtitle" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
            {siteConfig.role} (Frontend) — {siteConfig.location}
          </motion.p>

          <motion.p
            className="hero__description"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div
            className="hero__tech"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            {siteConfig.techStack.map((tech) => (
              <span key={tech} className="hero__tech-pill">
                {tech}
              </span>
            ))}
          </motion.div>

          <motion.div
            className="hero__actions"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
          >
            <button
              className="btn btn--primary"
              onClick={() => scrollToSection("contact")}
            >
              Let&apos;s Connect
            </button>
            <button className="btn btn--outline" onClick={handleResumeClick}>
              View Resume
            </button>
          </motion.div>

          <motion.div
            className="hero__footer"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={5}
          >
            <div className="hero__stats">
              {siteConfig.stats.map((stat) => (
                <div key={stat.label} className="hero__stat">
                  <span className="hero__stat-value accent-text">{stat.value}</span>
                  <span className="hero__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="hero__socials">
              {siteConfig.socials.map((social) => {
                const Icon = socialIcons[social.name];
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero__social-link"
                    aria-label={social.label}
                  >
                    {Icon && <Icon />}
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero__visual"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          <div className="hero__image-card">
            <div className="hero__image-ring" aria-hidden="true" />
            <div className="hero__image-glow" aria-hidden="true" />
            <div className="hero__image-frame">
              <img
                src={Profile_image}
                alt={`${siteConfig.name} profile`}
                className="hero__image"
                width={460}
                height={460}
                loading="eager"
                decoding="async"
              />
            </div>
            <div className="hero__floating-card hero__floating-card--role">
              <span className="hero__floating-label">Currently</span>
              <span className="hero__floating-value">{siteConfig.company}</span>
            </div>
            <div className="hero__floating-card hero__floating-card--stack">
              <span className="hero__floating-label">Focus</span>
              <span className="hero__floating-value">Design Systems</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
