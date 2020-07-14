import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar, NavbarBrand, Alert, Badge} from 'reactstrap';


function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="#">Ristorante Con Fusion</NavbarBrand>
          <Alert className='alert-danger'>hello</Alert>
        </div>
      </Navbar>
      <Badge className="bdgp">hey whats up</Badge>
      
    </div>
  );
}

export default App;
