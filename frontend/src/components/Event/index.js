import React from "react";
import { Card, ImageCard, CardDescription } from "./EventElements";
import { Link } from "react-router-dom";
import "./Event.css";
function Event({ thumbnail_url, title, description, price, sport, id }) {
  return (
    <Card>
      <Link to={`/event/${id}`}>
        <ImageCard src={thumbnail_url} />
      </Link>
      <CardDescription>
        <h3 className="card__title">{title}</h3>
        <p className="card__description">
          {description.split("", 50).join("")}...
        </p>
        <p className="card__details">
          <strong>${price}.00</strong>
          <span>{sport}</span>
        </p>
      </CardDescription>
    </Card>
  );
}

export default Event;
