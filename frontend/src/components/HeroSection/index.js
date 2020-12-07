import React from "react";
import "./HeroComponents.css";
import { MdArrowForward } from "react-icons/md";
import { Link as LinkS } from "react-scroll";
const HeroSection = () => {
  return (
    <header className="hero">
      <div className="container hero__wrapper">
        <div className="hero__grid">
          <h1 className="hero__text">
            JOIN THE BEST
            <span> FITNESS CLUB</span>
          </h1>
          <h3>
            <span>Challenge</span> your limits
          </h3>
          <p>
            New events every week! Challenge yourself, you mind, your family and
            friends. Get to know us in the button below
          </p>
          <LinkS className="btn primary">
            About Us <MdArrowForward />
          </LinkS>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
