import React from "react";
import { FaTimes } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <aside
      className={`sidebar ${isOpen ? "sidebar--open" : "sidebar--closed"}`}
    >
      <FaTimes className="sidebar__close-btn" onClick={toggle} />
    </aside>
  );
};

export default Sidebar;
