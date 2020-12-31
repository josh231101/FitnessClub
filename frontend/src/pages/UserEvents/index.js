import React, { useEffect, useState } from 'react';
import Event from '../../components/Event';
import HeroSection from '../../components/HeroSection';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link as LinkR} from 'react-router-dom';
import api from '../../services/api';
import {useStateValue} from '../../services/StateProvider';
import './UserEvents.css';

const UserEvents = ({history}) => {
    const [{user}] = useStateValue();
    const [userEvents,setUserEvents] = useState([]);
    const [noEvents,setNoEventsStatus] = useState(false);
    const URL = '/user/events';
    const getEvents = async() =>{
        const response = await api.get(URL,{headers : {user}});
        const isNotEmpty = response.data.length;
        if(isNotEmpty){
            console.log("RESPONSE",response);
            console.log("RESPONSE DATA",response.data);
            setUserEvents(response.data)
        }else{
            setNoEventsStatus(true)
        }
    }
    const setNoEventsMessage = () => {
        return (
            <div>
                <h3>You don't have any events yet, would you like to create one?</h3>
                <LinkR to="/events" className="btn primary">Create new event</LinkR>
            </div>
        )
    }
    useEffect(() => {
        if(user){
            const eventSection = document.querySelector("#events");
            getEvents();
            console.log(eventSection);
            eventSection.scrollIntoView();
        }
        else{
            history.push('/login');
        }
    // eslint-disable-next-line    
    }, [user])
    return (
        <>
          <Navbar/>
          <HeroSection/>
          <section id="events" className="container">
            <h2>My Events</h2>
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

export default UserEvents
