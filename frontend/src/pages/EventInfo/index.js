import React, { useEffect, useState } from "react";
import HeroSection from "../../components/HeroSection";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import api from "../../services/api";
import {scroller} from 'react-scroll';
import {useStateValue} from '../../services/StateProvider';
import "./EventInfo.css";
import Sidebar from "../../components/Sidebar";

const EventInfo = ({history}) => {
  const [{user,isSidebarOpen},dispatch] = useStateValue();
  const [event, setEvent] = useState({});
  useEffect(() => {
    getEvent();
  }, []);
  const getEvent = async () => {
    const url = window.location.pathname;
    const response = await api.get(url);
    setEvent(response.data);
  };

  const handleSubscribeEvent = ()=>{
    if(!user){
      console.log("USer doesn't exists");
      return history.push('/login');
    }
  }

  useEffect(() => {
    scroller.scrollTo('event',{
      duration : 1000,
      smooth : true,
      offset : -80,
      exact : "true",
    })
  }, []);
  return (
    <>
      <Sidebar isOpen={isSidebarOpen} toggle={()=>dispatch({type :'TOGGLE_SIDEBAR'})}/>
      <Navbar toggle={()=>dispatch({type :'TOGGLE_SIDEBAR'})}/>
      <HeroSection/>
      <section id="event" className="container">
        <h2>Event</h2>
        {event && (
          <div id="event" className="event">
            <img src={event.thumbnail_url} alt="Sport event illustration" />
            <div clas="event__description">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <p className="event__details">
                <strong>$ {event.price}</strong>
                <span>{event.sport}</span>
              </p>
              <button className="btn primary" onClick={handleSubscribeEvent}>Subscribe</button>
            </div>
          </div>
        )}
      </section>
      <Footer/>
    </>
  );
};

export default EventInfo;
