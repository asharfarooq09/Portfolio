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
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    if (sections[id] && sections[id].current) {
      sections[id].current.scrollIntoView({ behavior: "smooth" });
    }
    handleSidebarClose();
  };

  return (
    <>
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
        <button className="navButton">Connect With Me</button>
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
