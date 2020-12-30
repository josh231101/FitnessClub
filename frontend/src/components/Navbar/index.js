import React, { useEffect } from "react";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {useStateValue} from "../../services/StateProvider";
import "./NavbarElements.css";

const Navbar = ({ toggle ,isHome}) => {
  const user = useStateValue();
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  const changeNav = () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY >= 80) {
      navbar.classList.remove("navbar--transparent");
      navbar.classList.add("navbar--active");
    } else {
      navbar.classList.remove("navbar--active");
      navbar.classList.add("navbar--transparent");
    }
  };
  const homeLinks = ()=>{
    return (
      <>
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
          </>
    )
  }
  const newUserLinks = ()=>{
    return(
      <>
      <li className="navbar__link">
      < LinkR to="/login">Log In</LinkR>
      </li>
      <li className="navbar__link">
        <LinkR to="/register">
          <button className="btn primary">Register</button>
        </LinkR>
      </li>
      </>
    )
  }
  const userLinks = () =>{
    return(
      <>
        <li className="navbar__link">
          < LinkR to="/myaccount">Create Event</LinkR>
        </li>
        <li className="navbar__link">
          <LinkR to="/events">
            <button className="btn primary">My Account</button>
          </LinkR>
        </li>
      </>
    )
  }
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
          {isHome && homeLinks()}
          {user ? userLinks(): newUserLinks() }
        </ul>
        <div className="navbar__burger-icon" onClick={toggle}>
          <FaBars />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
