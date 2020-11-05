import React from "react";
import "./HeroComponents.css";
import { MdArrowForward } from "react-icons/md";
import { Link as LinkS } from "react-scroll";
const HeroSection = () => {
  return (
    <header className="mainHeader">
      <div className="mainHeader__wrapper">
        <div className="mainHeader__wrapper__grid">
          <h1 className="mainHeader__wrapper__grid__text">
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
          <LinkS className="mainHeader__wrapper__grid__btn">
            About Us <MdArrowForward />
          </LinkS>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
