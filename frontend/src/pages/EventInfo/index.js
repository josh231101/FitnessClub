import React, { useEffect, useState } from "react";
import HeroSection from "../../components/HeroSection";
import Navbar from "../../components/Navbar";
import api from "../../services/api";

const EventInfo = () => {
  const [event, setEvent] = useState({});
  useEffect(() => {
    console.log(window.location.pathname);
    console.log("Gffff");
    getEvent();
  }, []);
  const getEvent = async () => {
    const url = window.location.pathname;
    console.log(url);
    const response = await api.get(url).then(({ data }) => {
      console.log(data);
      setEvent(data);
    });
  };
  return (
    <div>
      <Navbar />
      <HeroSection />
      <section className="container">
        <h2>Event</h2>
        {event && (
          <div className="event">
            <img src={event.thumbnail_url} />
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p>
              <strong>{event.price}</strong>
              <span>{event.sport}</span>
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default EventInfo;
