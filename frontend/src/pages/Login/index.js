import React, {useState} from 'react';
import api from '../../services/api';
import { Container, Button, Form, FormGroup, Input } from 'reactstrap';

function Login({history}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async evt =>{
        evt.preventDefault();

        //The baseUrl is explicit, as first argument we pass the route to post, second argument an object with the info
        const response = await api.post('/login', { email, password })

        //If the could login, we can get the data,
        const userId = response.data._id || false;

        if(userId){
            //We create a localstorage to have the info in all the SPA
            localStorage.setItem('user',userId);
            history.push('/dashboard');
        }else{
            const {message} = response.data;
            alert(message);
        }
    }

    return (
        <Container>
            <h2>Login</h2> 
            <p>Please <strong>Login</strong> into your account</p>
            <Form inline onSubmit={handleSubmit}>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Input type="email" name="email" id="exampleEmail" placeholder="Your Email" onChange={evt => setEmail(evt.target.value)}/>
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Input type="password" name="password" id="examplePassword" placeholder="Your Password" onChange={evt => setPassword(evt.target.value)}/>
                </FormGroup>
                <Button>Submit</Button>
        </Form>
      </Container>
    )
}

export default Login