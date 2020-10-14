import React from 'react';
import './App.css';
import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'reactstrap'; 

function App() {
  return (
    <Container>
      <h1>Sport's App</h1>
      <Routes/>
    </Container>
  );
}

export default App;
