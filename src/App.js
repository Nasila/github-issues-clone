import React from 'react';
import './App.css';
import Routes from './routes.js';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
        <Navbar bg="dark">
          <Navbar.Brand href="#home" style={{color: 'white'}}>
            git-hub
          </Navbar.Brand>
      </Navbar>
      <Routes/>
    </div>
  );
}

export default App;
