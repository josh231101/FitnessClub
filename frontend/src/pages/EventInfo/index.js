import React, { useEffect, useState } from "react";
import HeroSection from "../../components/HeroSection";
import Navbar from "../../components/Navbar";
import api from "../../services/api";
import "./EventInfo.css";

const EventInfo = () => {
  const [event, setEvent] = useState({});
  useEffect(() => {
    getEvent();
  }, []);
  const getEvent = async () => {
    const url = window.location.pathname;
    const response = await api.get(url);
    setEvent(response.data);
  };
  return (
    <div>
      <Navbar />
      <HeroSection />
      <section className="container">
        <h2>Event</h2>
        {event && (
          <div className="event">
            <img src={event.thumbnail_url} alt="Sport event illustration" />
            <div clas="event__description">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <p>
                <strong>{event.price}</strong>
                <span>{event.sport}</span>
              </p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default EventInfo;
