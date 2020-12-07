import React from "react";
import "./Features.css";
import calendario from "../../assets/calendario.svg";
import ducha from "../../assets/ducha.svg";
import pesa from "../../assets/pesa.svg";
import salud from "../../assets/salud.svg";

const Features = () => {
  return (
    <section className="container m-3 center">
      <h2 className="m-3">Our Features</h2>
      <div className="features">
        <div className="feature">
          <img className="feature__img" src={calendario} />
          <h4>COOL EVENTS</h4>
        </div>
        <div className="feature">
          <img className="feature__img" src={salud} />
          <h4>MEDICAL ATTENTION</h4>
        </div>
        <div className="feature">
          <img className="feature__img" src={pesa} />
          <h4>EQUIPMENT</h4>
        </div>
        <div className="feature">
          <img className="feature__img" src={ducha} />
          <h4>FREE SHOWERS</h4>
        </div>
      </div>
    </section>
  );
};

export default Features;
