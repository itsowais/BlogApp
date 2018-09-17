import React, { Component } from 'react';
import logo from './logo.jpg';
import logo1 from './logo1.png'
import './App.css';
import {Thumbnail,Carousel,Navbar,NavItem,Grid,Row,Col,NavDropdown,Nav,MenuItem,} from 'react-bootstrap'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import NavBare from'./componet/navbar'
import Slider from './componet/slider'
class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBare/>
      <Slider/>
  {/* <img className='w-100' src={logo} alt="hello"/> */}
  
      {/* <img className=" w-100" src={logo} alt="First slide"/> */}
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
