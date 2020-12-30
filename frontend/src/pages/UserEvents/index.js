import React, { useEffect, useState } from 'react';
import Event from '../../components/Event';
import HeroSection from '../../components/HeroSection';
import Navbar from '../../components/Navbar';
import api from '../../services/api';
import {useStateValue} from '../../services/StateProvider';
import './UserEvents.css';

const UserEvents = () => {
    const [{user}] = useStateValue();
    const [userEvents,setUserEvents] = useState([]);
    const URL = '/user/events';
    useEffect(() => {
        if(user){
            getEvents();
        }
    }, [])
    const getEvents = async() =>{
        const response = await api.get(URL,{headers : {user}});
        console.log(response.data);
        setUserEvents(response.data)
    }
    return (
        <>
          <Navbar/>
          <HeroSection/>
          <section className="container">
            <h2>My Events</h2>
            <div className="user-events">
                {userEvents.map((event) => (
                    <Event {...event} />
                ))}
            </div>
          </section>

        </>
    )
}

export default UserEvents
