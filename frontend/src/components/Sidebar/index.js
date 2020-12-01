import React from "react";
import "./Sidebar.css";

const Sidebar = ({ isOpen }) => {
  return (
    <aside
      className={`sidebar ${isOpen ? "sidebar--open" : "sidebar--closed"}`}
    ></aside>
  );
};

export default Sidebar;
