import React, { useEffect, useState } from "react";
import api from "../../services/api";
import Event from "../../components/Event";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./Dashboard.css";
import HeroSection from "../../components/HeroSection";
import { scroller } from 'react-scroll';
import {useStateValue} from '../../services/StateProvider';
import Sidebar from "../../components/Sidebar";

const Dashboard = () => {
  const [{isSidebarOpen}, dispatch] = useStateValue();
  const [events, setEvents] = useState([]);
  console.log(isSidebarOpen);
  useEffect(() => {
    scroller.scrollTo('events',{
      duration : 1000,
      smooth : true,
      offset : -80,
      exact : "true",
    })
    getEvents();
  }, []);
  const getEvents = async (filter) => {
    const url = filter ? `/dashboard/${filter}` : "/dashboard";
    const response = await api.get(url);
    console.log(response.data);
    setEvents(response.data);
  };
  const filterEvents = (query) => {
    getEvents(query);
  };
  return (
    <>
      <Sidebar isOpen={isSidebarOpen} toggle={()=>dispatch({type :'TOGGLE_SIDEBAR'})}/>
      <Navbar toggle={()=>dispatch({type :'TOGGLE_SIDEBAR'})}/>
      <HeroSection />
      <section id="events" className="container">
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
        <div className="cards-wrapper">
          {events.map((event) => (
            <Event {...event} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Dashboard;
