import React from "react";
import { ImQuotesLeft } from "react-icons/im";
import "./Testimonials.css";
import Slider from "infinite-react-carousel";
import "./Testimonials.css";

const Testimonials = () => {
  const settings = {
    className: "container",
    autoplay: true,
    adaptiveHeight: true,
    arrows: false,
  };
  return (
    <section className="testimonials">
      <Slider dots {...settings}>
        <div className="testimonials__center">
          <ImQuotesLeft class="wh" />
          <blockquote>
            Recomendado al 100%. Las instalaciones están de lujo y el
            tratamiento médico es de buena calidad
          </blockquote>
          <p>Random User</p>
        </div>
        <div className="testimonials__center">
          <ImQuotesLeft class="wh" />
          <blockquote>
            Un lugar para todas las edades, los eventos son definitivamente lo
            máximo, vale la pena.
          </blockquote>
          <p>Random User</p>
        </div>
        <div className="testimonials__center">
          <ImQuotesLeft class="wh" />
          <blockquote>
            Un lugar muy agradable, los eventos están increibles! Únete a este
            fitness club
          </blockquote>
          <p>Random User</p>
        </div>
        <div className="testimonials__center">
          <ImQuotesLeft class="wh" />
          <blockquote>
            Me encanta este lugar, tiene precios muy accesibles y el equipo sin
            duda está increible
          </blockquote>
          <p>Random User</p>
        </div>
      </Slider>
    </section>
  );
};

export default Testimonials;
