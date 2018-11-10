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
import NavBare from './componet/navbar'
import { BrowserRouter, Route } from "react-router-dom";
class App extends Component {
  render() {
    return (
    
      <BrowserRouter>
      <div>
      
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={BlogPost} />
        <Route path="/contact" component={Contact} />
      </div>
    </BrowserRouter>
    
    
    );
  }
}

export default App;      
