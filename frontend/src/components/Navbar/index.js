import React, { useEffect } from "react";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import "./NavbarElements.css";

const Navbar = ({ toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
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
            <LinkR className="navbar__title" to="/" onClick={toggleHome}>
              Fit<span>Club</span>
            </LinkR>
          </li>
          <li className="navbar__link">
            <LinkS
              to="about"
              smooth={true}
              duration={500}
              exact="true"
              offset={-80}
            >
              About Us
            </LinkS>
          </li>
          <li className="navbar__link">
            <LinkS
              to="features"
              smooth={true}
              duration={500}
              exact="true"
              offset={-80}
            >
              Features
            </LinkS>
          </li>
          <li className="navbar__link">
            <LinkR to="/login">Log In</LinkR>
          </li>
          <li className="navbar__link">
            <LinkR to="/register">
              <button className="btn primary">Register</button>
            </LinkR>
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
