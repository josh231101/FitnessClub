import React, { useEffect, useState } from "react";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./NavbarElements.css";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      document
        .getElementsByClassName("navbar")[0]
        .classList.remove("navbar--transparent");
      document
        .getElementsByClassName("navbar")[0]
        .classList.add("navbar--active");
    } else {
      document
        .getElementsByClassName("navbar")[0]
        .classList.remove("navbar--active");
      document
        .getElementsByClassName("navbar")[0]
        .classList.add("navbar--transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  return (
    <nav class="navbar navbar--transparent">
      <div class="navbar__wrapper">
        <LinkR class="navbar__title" to="/">
          Fit<span>Club</span>
        </LinkR>
        <div class="navbar__links">
          <LinkS to="about">About Us</LinkS>
          <LinkS to="features">Features</LinkS>
          <LinkS to="features">Events</LinkS>
          <LinkR to="/login">Log In</LinkR>
          <LinkR to="/register">Register</LinkR>
        </div>
        <div className="navbar__burger-icon" onClick={toggle}>
          <FaBars />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
