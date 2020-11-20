import React, { useEffect, useState } from "react";
import api from "../../services/api";
import Event from "../../components/Event";
import { CardWrapper } from "./DashboardElements";
import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
import Footer from "../../components/Footer";

const Dashboard = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await api.get("/dashboard").then(({ data }) => {
        console.log(data);
        setEvents(data);
      });
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="container">
        <h2>Events</h2>
        <CardWrapper>
          {events.map((event) => (
            <Event
              imageUrl={event.thumbnail_url}
              title={event.title}
              description={event.description}
              price={event.price}
              topic={event.sport}
            />
          ))}
        </CardWrapper>
      </div>
      <Footer />
    </>
  );
};
export default Dashboard;
