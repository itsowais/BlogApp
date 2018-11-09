import React, { Component } from 'react';
import logo from './logo.jpg';
import logo1 from './logo1.png'
import './App.css';
import {Thumbnail,Carousel,Navbar,NavItem,Grid,Row,Col,NavDropdown,Nav,MenuItem,} from 'react-bootstrap'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,CardDeck,CardGroup } from 'reactstrap';

import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Home from './componet/pages/home'
import About from './componet/pages/aboutus'
import BlogPost from './componet/pages/blogpost'
import Contact from './componet/pages/contactus'
class App extends Component {
  render() {
    return (
  <Contact/>
    );
  }
}

export default App;
