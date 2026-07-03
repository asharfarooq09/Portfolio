import { menuOptions } from "./constant";
import "./Navbar.css";

export const Sidebar = ({ menuRef, handleSidebarClose, sections, activeSection }) => {
  const scrollToSection = (id) => {
    sections[id]?.current?.scrollIntoView({ behavior: "smooth" });
    handleSidebarClose();
  };

  return (
    <div ref={menuRef} className="side-drawer open">
      <ul className="drawer-list">
        {menuOptions.map((item) => (
          <li key={item.id}>
            <button
              className={activeSection === item.id ? "active" : ""}
              onClick={() => scrollToSection(item.id)}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
