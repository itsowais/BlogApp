import React, { Component } from 'react';
import logo from '../../photo.JPG';
import logo1 from '../../logo1.png'
import '../../App.css';
import {Image,Thumbnail,Jumbotron,Carousel,Navbar,NavItem,Grid,HelpBlock,Glyphicon,Form,Checkbox,Radio,Row,Col,NavDropdown,Nav,MenuItem,FormControl,InputGroup,ControlLabel } from 'react-bootstrap'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,CardDeck,CardGroup,Container, FormGroup, Label, Input, FormText} from 'reactstrap';
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
  <div style={{marginLeft:'50px',marginRight:'50px'}}>
  <Form>
        <FormGroup>
          <code><h4><Label for="exampleEmail">Email</Label></h4></code>
          <Input type="email" name="email" id="exampleEmail" placeholder="Example@example.com" />
        </FormGroup>
        <FormGroup>
        <code><h4><Label for="exampleEmail">Password</Label></h4></code>
          <Input type="password" name="password" id="examplePassword" placeholder="Password" />
        </FormGroup>
        <FormGroup>
        <code><h4><Label for="exampleEmail">Gender</Label></h4></code>
          <Input type="select" name="select" id="exampleSelect">
            <option>Male</option>
            <option>Female</option>
          </Input>
        </FormGroup>
        
        <FormGroup>
        <code><h4><Label for="exampleEmail">Messages</Label></h4></code>
          <Input type="textarea" name="text" id="exampleText" placeholder='Message'/>
        </FormGroup>
        
       
          
        <Button>Submit</Button>
      </Form>
      </div>
        <hr/>
        <p className="App-intro">
           <code>&copy; All Rights are reserved to owais 2018 code</code>
        </p>

      </div>
    );
  }
}

export default Contact;
