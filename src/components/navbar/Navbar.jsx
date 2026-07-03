import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import useSidebarAnimation from "../../hooks/useSidebarAnimation";
import useActiveSection from "../../hooks/useActiveSection";
import { siteConfig } from "../../data/site";
import "./Navbar.css";
import { Sidebar } from "./Sidebar";
import { menuOptions } from "./constant";

const Navbar = ({ sections }) => {
  const { handleSidebarClose, menu, menuRef, handleSidebarOpen } =
    useSidebarAnimation();
  const [scrolled, setScrolled] = useState(false);
  const sectionIds = menuOptions.map((item) => item.id);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    sections[id]?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    handleSidebarClose();
  };

  return (
    <>
      <header className="nav-container">
        <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
          <button
            className="navbar__menu-btn"
            onClick={handleSidebarOpen}
            aria-label="Open menu"
          >
            <RxHamburgerMenu />
          </button>

          <button
            className="navbar__logo"
            onClick={() => scrollToSection("home")}
          >
            {siteConfig.shortName}
            <span className="navbar__logo-dot">.</span>
          </button>

          <ul className="navbar__links">
            {menuOptions.map((item) => (
              <li key={item.id}>
                <button
                  className={`navbar__link ${activeSection === item.id ? "navbar__link--active" : ""}`}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <motion.span
                      className="navbar__link-indicator"
                      layoutId="navIndicator"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <button
            className="btn btn--primary navbar__cta"
            onClick={() => scrollToSection("contact")}
          >
            Hire Me
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menu && (
          <>
            <Sidebar
              menuRef={menuRef}
              handleSidebarClose={handleSidebarClose}
              sections={sections}
              activeSection={activeSection}
            />
            <motion.div
              className="navbar__overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleSidebarClose}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
