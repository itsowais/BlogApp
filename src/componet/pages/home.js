import React, { Component } from 'react';
import logo from '../../logo.jpg';
import logo1 from '../../logo1.png'
import '../../App.css';
import {Thumbnail,Carousel,Navbar,NavItem,Grid,Row,Col,NavDropdown,Nav,MenuItem,} from 'react-bootstrap'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,CardDeck,CardGroup } from 'reactstrap';
import NavBare from'../navbar'
import Slider from '../slider'
import CardPost from '../card'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
class Home extends Component {
  render() {
    return (
      <div className="App">
      <NavBare/>
      <Slider/>
      <code><h1 className="App-title">Welcome to MY BLOG</h1></code>
      <CardDeck className="w-100 justify-content-center">
      <CardPost/>
      <CardPost/>
      <CardPost/>
      <CardPost/>
      <CardPost/>
      <CardPost/>
      </CardDeck>
  {/* <img className='w-100' src={logo} alt="hello"/> */}
  
      {/* <img className=" w-100" src={logo} alt="First slide"/> */}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <hr/>
        <p className="App-intro">
           <code>&copy; All Rights are reserved to owais 2018 code</code>
        </p>

      </div>
    );
  }
}

export default Home;
