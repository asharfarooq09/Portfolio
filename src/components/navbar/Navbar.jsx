import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import useSidebarAnimation from "../../hooks/useSidebarAnimation";
import "./Navbar.css";
import { Sidebar } from "./Sidebar";
import { menuOptions } from "./constant";

const Navbar = ({ sections }) => {
  const { handleSidebarClose, menu, menuRef, handleSidebarOpen } =
    useSidebarAnimation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    if (id && sections[id].current) {
      sections[id].current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    handleSidebarClose();
  };

  return (
    <>
      <div className="navContainer">
        <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
          <div className="navLogo">
            <RxHamburgerMenu onClick={handleSidebarOpen} className="navMenu" />
            <p className="logo">Ashar</p>
          </div>
          <ul className="navList">
            {menuOptions.map((menuItem, index) => (
              <li key={index} onClick={() => scrollToSection(menuItem.id)}>
                {menuItem.name}
              </li>
            ))}
          </ul>
          <button
            className="navButton"
            onClick={() => scrollToSection("contact")}
          >
            Connect With Me
          </button>
        </div>
      </div>

      {menu && (
        <>
          <Sidebar
            menuRef={menuRef}
            handleSidebarClose={handleSidebarClose}
            sections={sections}
          />
          <div className="overlay" onClick={handleSidebarClose}></div>
        </>
      )}
    </>
  );
};

export default Navbar;
