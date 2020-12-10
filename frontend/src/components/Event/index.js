import React from "react";
import { Card, ImageCard, CardDescription } from "./EventElements";
import "./Event.css";
function Event({ imageUrl, title, description, price, topic }) {
  return (
    <Card>
      <ImageCard src={imageUrl} />
      <CardDescription>
        <h3 className="card__title">{title}</h3>
        <p className="card__description">
          {description.split("", 50).join("")}...
        </p>
        <p className="card__details">
          <strong>${price}.00</strong>
          <span>{topic}</span>
        </p>
      </CardDescription>
    </Card>
  );
}

export default Event;
