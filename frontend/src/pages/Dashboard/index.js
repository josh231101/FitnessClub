import React,{useEffect, useState} from 'react';
import api from '../../services/api';
import Event from '../../components/Event'

function Dashboard() {
    const [events, setEvents] = useState([])
    
    useEffect(() => {
        const fetchData = async () =>{
            await api.get('/dashboard')
            .then(({data})=>{
                console.log(data);
                setEvents(data)
            })
            
        }
        fetchData()
        
    }, [])
    
    return (
        <div>
            All of our events!
            {events.map((event) => (
                <Event
                    imageUrl = {event.thumbnail_url}
                    title = {event.title}
                    description = {event.description}
                    price = {event.price}
                    topic = {event.sport}
                    
                />
            ))}
        </div>
    )}
export default Dashboard
