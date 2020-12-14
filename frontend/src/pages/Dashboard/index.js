import React, { useEffect, useState } from "react";
import api from "../../services/api";
import Event from "../../components/Event";
import { CardWrapper } from "./DashboardElements";
import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
import Footer from "../../components/Footer";
import "./Dashboard.css";

const Dashboard = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents();
  }, []);
  const getEvents = async (filter) => {
    const url = filter ? `/dashboard/${filter}` : "/dashboard";
    const response = await api.get(url).then(({ data }) => {
      setEvents(data);
    });
  };
  const filterEvents = (query) => {
    getEvents(query);
  };

  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="container">
        <h2>Events</h2>
        <p className="events__filter">Filter:</p>
        <select
          name="event"
          id="event"
          className="custom-select sources"
          onChange={(e) => {
            filterEvents(e.target.value);
          }}
        >
          <option className="custom-option" value={""}>
            All Events
          </option>
          <option className="custom-option" value="running">
            Running
          </option>
          <option className="custom-option" value="cycling">
            Cycling
          </option>
          <option className="custom-option" value="swimming">
            Swimming
          </option>
          <option className="custom-option" value="other">
            Others
          </option>
        </select>
        <div class="card-wrapper">
          {events.map((event) => (
            <Event {...event} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Dashboard;
