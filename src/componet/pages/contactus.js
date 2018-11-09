import React, { Component } from 'react';
import logo from '../../photo.JPG';
import logo1 from '../../logo1.png'
import '../../App.css';
import {Image,Thumbnail,Jumbotron,Label,Carousel,Navbar,NavItem,Grid,HelpBlock,Glyphicon,Form,Checkbox,Radio,Row,Col,NavDropdown,Nav,MenuItem,FormControl,FormGroup,InputGroup,ControlLabel } from 'react-bootstrap'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,CardDeck,CardGroup,Container,Input} from 'reactstrap';
import NavBare from'../navbar'
import Slider from '../slider'
import CardPost from '../card'
import Flippy, { FrontSide, BackSide } from 'react-flippy';

class Contact extends Component {

    render() {
    return (
      <div className="App">
      <NavBare/>
  
    

  <code><h1><b>Contact Us</b></h1></code>

        <hr/>
        <p className="App-intro">
           <code>&copy; All Rights are reserved to owais 2018 code</code>
        </p>

      </div>
    );
  }
}

export default Contact;
