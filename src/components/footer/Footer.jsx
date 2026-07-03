import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { siteConfig } from "../../data/site";
import "./Footer.css";

const socialIcons = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Email: MdEmail,
};

const Footer = ({ sections }) => {
  const scrollToTop = () => {
    sections?.home?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    sections?.contact?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <p className="footer__logo">
              {siteConfig.shortName}
              <span className="footer__logo-dot">.</span>
            </p>
            <p className="footer__tagline">
              {siteConfig.role} — design systems, component libraries, and production-ready UI.
            </p>
          </div>

          <div className="footer__socials">
            {siteConfig.socials.map((social) => {
              const Icon = socialIcons[social.name];
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label={social.label}
                >
                  {Icon && <Icon />}
                </a>
              );
            })}
          </div>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <p className="footer__copy">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="footer__actions">
            <button className="footer__link" onClick={scrollToContact}>
              Contact
            </button>
            <button
              className="footer__back-top"
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              <FaArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
