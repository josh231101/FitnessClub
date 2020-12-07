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
    <nav className="navbar navbar--transparent">
      <div className="navbar__wrapper">
        <ul className="navbar__items">
          <li className="navbar__title-wrapper">
            <LinkR className="navbar__title" to="/">
              Fit<span>Club</span>
            </LinkR>
          </li>
          <li className="navbar__link">
            <LinkS to="about">About Us</LinkS>
          </li>
          <li className="navbar__link">
            <LinkS to="about">Features</LinkS>
          </li>
          <li className="navbar__link">
            <LinkS to="about">Log In</LinkS>
          </li>
          <li className="navbar__link">
            <LinkS to="about"><button className="btn primary">Register</button></LinkS>
          </li>
        </ul>
        <div className="navbar__burger-icon" onClick={toggle}>
          <FaBars />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
