import React,{useState,useEffect} from 'react'
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection';
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import api from '../../services/api';
import {useStateValue} from '../../services/StateProvider';
import {Link as LinkR} from 'react-router-dom';
import {scroller} from 'react-scroll';
import Event from '../../components/Event';

const UserSubscriptions = ({history}) => {
    const [{user,isSidebarOpen},dispatch] = useStateValue();
    const [userEvents,setUserEvents] = useState([]);
    const [noEvents,setNoEventsStatus] = useState(false);

    const URL = '/user/subscriptions';
    const getEvents = async() =>{
        const response = await api.get(URL,{headers : {user}});
        console.table(response)
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
                <h3>You don't have any subscriptions yet, would you like to add one?</h3>
                <LinkR to="/events" className="btn primary">Create new event</LinkR>
            </div>
        )
    }
    useEffect(() => {
        if(user){
            const eventSection = document.querySelector("#events");
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
    }, [user])
    return (
        <>
          <Sidebar isOpen={isSidebarOpen} toggle={()=>dispatch({type :'TOGGLE_SIDEBAR'})}/>
          <Navbar toggle={()=>dispatch({type :'TOGGLE_SIDEBAR'})}/>
          <HeroSection/>
          <section id="events" className="container m-3">
            <h2>My Subscriptions</h2>
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

export default UserSubscriptions
