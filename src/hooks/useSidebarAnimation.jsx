import React, { useRef, useState } from "react";

const useSidebarAnimation = () => {
  const menuRef = useRef(null);
  const [menu, setMenu] = useState(false);

  const handleSidebarClose = () => {
    menuRef.current?.classList?.remove("open");
    menuRef.current?.classList?.add("close");
    setTimeout(() => setMenu(false), 300);
  };

  const handleSidebarOpen = () => {
    setMenu(true);
  };

  return {
    menuRef,
    handleSidebarClose,
    handleSidebarOpen,
    menu,
  };
};

export default useSidebarAnimation;
