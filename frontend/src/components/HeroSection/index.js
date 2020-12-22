import React from "react";
import "./HeroComponents.css";
import { MdArrowForward } from "react-icons/md";
import { Link as LinkR } from "react-router-dom";
import { scroller as scroll } from "react-scroll";
const HeroSection = () => {
  const moveToEvents = () => {
    scroll.scrollTo("events", {
      duration: 500,
      smooth: true,
      offset : -80,
    });
  };
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
          <LinkR to="/dashboard" onClick={moveToEvents} className="btn primary">
            Events <MdArrowForward />
          </LinkR>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
