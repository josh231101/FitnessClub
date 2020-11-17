import React from "react";
import "./Service.css";
import Image from "../../images/cardio.jpg";
const Service = ({ title, imgUrl }) => {
  return (
    <div className="service">
      <div
        style={{ backgroundImage: `url(${imgUrl})` }}
        className="service__bg"
      ></div>
      <h3 className="service__title">{title}</h3>
    </div>
  );
};

export default Service;
