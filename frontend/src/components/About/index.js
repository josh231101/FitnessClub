import React from "react";
import aboutImg from "../../images/aboutus.jpg";
import "./About.css";

const About = () => {
  return (
    <section className="container about p-3">
      <div className="about__img">
        <img
          loading="lazy"
          src={aboutImg}
          alt="FitClub About Ilustration"
          aria-label="FitClub Image Example"
        />
      </div>
      <div className="about__text">
        <h2>
          About <span>Us</span>
        </h2>
        <p className="txt-justify">
          Donec enim augue, tempus vehicula pharetra non, feugiat vel lacus.
          Donec malesuada iaculis feugiat. Duis ullamcorper massa sit amet massa
          iaculis sagittis. Fusce interdum purus magna, sit amet imperdiet odio
          iaculis vitae.Fusce interdum purus magna, sit amet imperdiet odio
          iaculis vitae.
        </p>
      </div>
    </section>
  );
};

export default About;
