import React from "react";
import { FaTimes } from "react-icons/fa";
import {Link as LinkS} from "react-scroll";
import {Link as LinkR} from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <aside
      className={`sidebar ${isOpen ? "sidebar--open" : "sidebar--closed"}`}
    >
      <FaTimes className="sidebar__close-btn" onClick={toggle} />
      <div className="sidebar__options">
        <LinkS to="about" onClick={toggle}>About Us</LinkS>
        <LinkS to="features" onClick={toggle}>Features</LinkS>
        <LinkR to="/login" onCLick={toggle}>Log In</LinkR>
        <LinkR to="/register" onCLick={toggle}>Register</LinkR>

      </div>
    </aside>
  );
};

export default Sidebar;
