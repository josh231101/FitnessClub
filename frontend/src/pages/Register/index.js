import React, {useState} from 'react';
import api from '../../services/api';
import { Container, Button, Form, FormGroup, Input } from 'reactstrap';

function Register({history}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = async evt =>{
        evt.preventDefault();
        console.log(email);
        console.log(password);

        //The baseUrl is explicit, as first argument we pass the route to post, second argument an object with the info
        const response = await api.post('/user/register', { email, password, firstName, lastName })
        console.log(response)
        console.log(response.data)
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
            <h2>Register</h2> 
            <p>Create a new account</p>
            <Form inline className="w-100" onSubmit={handleSubmit}>
                <FormGroup className="w-100 mb-2 text-xl-center">
                <Input className="" type="text" name="firstName" id="firstName" placeholder="Your First Name" onChange={evt => setFirstName(evt.target.value)}/>
                </FormGroup>
                <FormGroup className="w-100 mb-2 ">
                <Input type="text" name="lastName" id="lastName" placeholder="Your Last Name" onChange={evt => setLastName(evt.target.value)}/>
                </FormGroup>
                <FormGroup className="w-100 mb-2">
                <Input type="email" name="email" id="exampleEmail" placeholder="Your Email" onChange={evt => setEmail(evt.target.value)}/>
                </FormGroup>
                <FormGroup className="w-100 mb-2">
                <Input type="password" name="password" id="examplePassword" placeholder="Your Password" onChange={evt => setPassword(evt.target.value)}/>
                </FormGroup>
                <Button>Submit</Button>
        </Form>
      </Container>
    )
}

export default Register