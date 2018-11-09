import React, { Component } from 'react';
import logo from '../../photo.JPG';
import logo1 from '../../logo1.png'
import '../../App.css';
import {Image,Thumbnail,Jumbotron,Label,Carousel,Navbar,NavItem,Grid,Row,Col,NavDropdown,Nav,MenuItem,} from 'react-bootstrap'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,CardDeck,CardGroup } from 'reactstrap';
import NavBare from'../navbar'
import Slider from '../slider'
import CardPost from '../card'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
class Blogpost extends Component {
  render() {
    return (
      <div className="App">
      <NavBare/>
  
      <Jumbotron style={{height:200}} >

  <code><h1><b>Blog Posts</b></h1></code>
  
</Jumbotron>

<CardDeck className="w-100 justify-content-center">
      <CardPost/>
      <CardPost/>
      <CardPost/>
      <CardPost/>
      <CardPost/>
      <CardPost/>
      </CardDeck>
        <hr/>
        <p className="App-intro">
           <code>&copy; All Rights are reserved to owais 2018 code</code>
        </p>

      </div>
    );
  }
}

export default Blogpost;
