import React from "react";
import { ImQuotesLeft } from "react-icons/im";
import "./Testimonials.css";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import imageOne from "../../images/aboutus.jpg";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials__wrapper">
        <ImQuotesLeft class="wh" />
        <blockquote>
          ME FASCINA ESTE LUGAR DE VERDAD NO PODRÍA ESTAR MUCHO MÁS CONTENTA DE
          LO QUE HE ENCONTRADO AQUÍ ME GUSTA DEMASIADO LA VERDA LO RECOMEINDO AL
          100
        </blockquote>
        <p>Random User</p>
      </div>
      <Carousel plugins={["arrows"]}>
        <img src={imageOne} />
        <img src={imageOne} />
        <img src={imageOne} />
      </Carousel>
    </section>
  );
};

export default Testimonials;
