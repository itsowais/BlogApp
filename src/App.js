import React, { Component } from 'react';
import logo from './logo1.png';
import './App.css';
import {Carousel,Navbar,NavItem,NavDropdown,Nav,MenuItem,} from 'react-bootstrap'
import NavBare from'./componet/navbar'
import Slider from './componet/slider'
class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBare/>
      
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <header className="App-header">
        <h1 className="App-title">Blog No 1</h1>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
