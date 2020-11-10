import React from "react";
import aboutImg from "../../images/aboutus.jpg";
import "./Main.css";

const Main = () => {
  return (
    <main className="container mainWrapper">
      <div className="mainWrapper__about">
        <div className="about__img">
          <img
            loading="lazy"
            src={aboutImg}
            alt="FitClub Image"
            aria-label="FitClub Image Example"
          />
        </div>
        <div className="about__text">
          <h2>
            About <span>Us</span>
          </h2>
          <p>
            Donec enim augue, tempus vehicula pharetra non, feugiat vel lacus.
            Donec malesuada iaculis feugiat. Duis ullamcorper massa sit amet
            massa iaculis sagittis. Fusce interdum purus magna, sit amet
            imperdiet odio iaculis vitae.Fusce interdum purus magna, sit amet
            imperdiet odio iaculis vitae.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Main;
