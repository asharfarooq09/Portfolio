import React from "react";
import { menuOptions } from "./constant";
import "./Navbar.css";

export const Sidebar = ({ menuRef, handleSidebarClose, sections }) => {
  
  const scrollToSection = (id) => {
    if (sections[id] && sections[id].current) {
      sections[id].current.scrollIntoView({ behavior: "smooth" });
    }
    handleSidebarClose();
  };

  return (
    <div ref={menuRef} className="sideDrawer open">
      <ul className="drawerList">
        {menuOptions.map((menuItem, index) => (
          <li key={index} onClick={() => scrollToSection(menuItem.id)}>
            {menuItem.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
