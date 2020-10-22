import React, {useState, useMemo} from 'react';
import api from '../../services/api';
import {Container, Button, Form, FormGroup,Input, Label} from 'reactstrap';
/*
        title : String,
        description : String,
        price : Number,
        thumbnail : String,
        sport : String,
        date : Date,

    */
function EventsPage() {
    const user_id = localStorage.getItem('user');
    const [title, setTitle ] = useState('');
    const [description, setDescription ] = useState('');
    const [price, setPrice ] = useState('');
    const [thumbnail, setThumbnail ] = useState(null);
    const [sport,setSport] = useState('');
    const [date, setDate ] = useState('');

    //Every time the thumnail changes I want to refresh the property. Memo is a Hook
    const preview = useMemo(()=>{
        return thumbnail ? URL.createObjectURL(thumbnail) : null;
    },[thumbnail])

    const submitHandler = async e =>{
        e.preventDefault();
        const user_id = localStorage.getItem('user');
        const eventData = new FormData();

        //We needed to create a form this time was not a JSON this time was a FORM
        eventData.append("thumbnail", thumbnail);
        eventData.append("sport", sport);
        eventData.append("description",description);
        eventData.append("price", price);
        eventData.append("date",date);
        eventData.append("title", title);
        
        try{
            await api.post('/event', eventData, {headers : {user_id}})
        
        }catch(e){
            alert(e)
        }
    }

    return (
        <Container>
            <h1>Create your own event</h1>
            <Form onSubmit={submitHandler}>
                <FormGroup>
                    <Label>Upload Image:</Label>
                    <Label id="thumbnail" style={{backgroundImage : `url(${preview})`}}>
                    <Input required type="file" onChange={(evt) => setThumbnail(evt.target.files[0])}/>
                    </Label>
                </FormGroup>
                <FormGroup>
                    <Label>Sport:</Label>
                    <Input required type="text" value={sport} placeholder="Sport Name" id="sport" onChange={(evt) => setSport(evt.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label>Title:</Label>
                    <Input required type="text" value={title} placeholder="Title" id="title" onChange={(evt) => setTitle(evt.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label>Description:</Label>
                    <Input required type="text" value={description} placeholder="Event Description" id="description" onChange={(evt) => setDescription(evt.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label>Event Price: </Label>
                    <Input required type="text" value={price} placeholder="Event Price $0.00" id="price" onChange={(evt) => setPrice(evt.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label>Event Date: </Label>
                    <Input required id="data" type="date" value={date}  id="price" onChange={(evt) => setDate(evt.target.value)}/>
                </FormGroup>
                <Button type="Submit">
                    Create Event
                </Button>
            </Form>
        </Container>
    )}
export default EventsPage
