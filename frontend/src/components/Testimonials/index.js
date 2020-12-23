import React from "react";
import { ImQuotesLeft } from "react-icons/im";
import "./Testimonials.css";
import Slider from "infinite-react-carousel";
import "./Testimonials.css";
import "./index.js";
import info from "./information.js";

const Testimonials = () => {
  const settings = {
    className: "container",
    autoplay: true,
    arrows: false,
    key : Math.floor(Math.random() * 10)
  };
  return (
    <section className="testimonials">
      <Slider dots {...settings}>
        {console.log(info)}
        {info.map((entry) => {
          return (
            <div className="testimonials__center">
              <ImQuotesLeft className="wh" />
              <blockquote>{entry.testimonial}</blockquote>
              <p>{entry.user}</p>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default Testimonials;
