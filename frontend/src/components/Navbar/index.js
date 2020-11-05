import React from "react";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import "./NavbarElements.css";

const Navbar = () => {
  return (
    <nav class="navbar">
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
    </nav>
  );
};

export default Navbar;
