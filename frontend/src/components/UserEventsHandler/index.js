import React, { useEffect, useState } from 'react';
import Event from '../../components/Event';
import HeroSection from '../../components/HeroSection';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link as LinkR} from 'react-router-dom';
import api from '../../services/api';
import {useStateValue} from '../../services/StateProvider';
import {scroller} from 'react-scroll';
import './UserEventsHandler.css';
import Sidebar from '../../components/Sidebar';

const UserEventsHandler = ({
history,
title,
URL,
noEventsMessage,
noEventsLink,
noEventsTitleLink,}) => {

    const [{user,isSidebarOpen},dispatch] = useStateValue();
    const [userEvents,setUserEvents] = useState([]);
    const [noEvents,setNoEventsStatus] = useState(false);

    const getEvents = async() =>{
        const response = await api.get(URL,{headers : {user}});
        const isNotEmpty = response.data.length;
        if(isNotEmpty){
            setUserEvents(response.data)
        }else{
            setNoEventsStatus(true)
        }
    }
    const setNoEventsMessage = () => {
        return (
            <div>
                <h3>{noEventsMessage}</h3>
                <LinkR to={noEventsLink} className="btn primary">{noEventsTitleLink}</LinkR>
            </div>
        )
    }
    useEffect(() => {
        if(user){
            getEvents();
            scroller.scrollTo('events',{
                duration : 1000,
                smooth : true,
                offset : -80,
                exact : "true",
            });
        }
        else{
            history.push('/login');
        }
    // eslint-disable-next-line    
    }, [URL])
    return (
        <>
          <Sidebar isOpen={isSidebarOpen} toggle={()=>dispatch({type :'TOGGLE_SIDEBAR'})}/>
          <Navbar toggle={()=>dispatch({type :'TOGGLE_SIDEBAR'})}/>
          <HeroSection/>
          <section id="events" className="container m-3">
            <h2>{title}</h2>
            <div className="cards-wrapper">
                {userEvents.map((event) => (
                    <Event {...event} />
                ))}
            </div>
            {noEvents && setNoEventsMessage()}
          </section>
          <Footer/>
        </>
    )
}

export default UserEventsHandler
