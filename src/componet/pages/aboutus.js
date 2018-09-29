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
class About extends Component {
  render() {
    return (
      <div className="App">
      <NavBare/>
      <Jumbotron>

  <code><h1><b> About Us</b></h1></code>
  <p>
      <code><h2>We believe to work together hello world its goodd</h2></code>
   </p>
  <p>
    <Button  className='primary'>Learn more</Button>
  </p>
</Jumbotron>
      <Grid>
  <Row>
    <Col xs={6} md={4}>
    </Col>
    <Col xs={6} md={4}>
      <Image src={logo} className='rounded-circle' style={{height:250,width:250}} />
    </Col>
    <Col xs={6} md={4}>
    </Col>
  </Row>
</Grid>

<code><h1><b> Owais Raza</b></h1></code>
<code><h3>Software Engineer</h3></code>
<Grid>
  <Row>
    <Col xs={1} md={1}>
    </Col>
    <Col xs={10} md={10}>
    <code><p><b>
  In my intial years in university i was learning java i completed core concepts and oop but stumbled my way to a book called ‘if hemingway wrote javascript’ that pulled my attention towards javascript and when i completed that book i was in love with javascript since then i have been working on various frameworks of javascript but when the whole world is talking about AI and Machine Learning boom i thought to put my contribution as well so i started to learn pyhton and machine learning as well.
For me every problem is an opportunity, this is my entrepreneurial part of personality that helps me solve problem in a way that it can provide people some opportunity. Working with team is something i always preferred because you can learn from everyone in your team.For me when you are leading a team you have to lead by example.
</b>  </p></code>

    </Col>
    <Col xs={1} md={1}>
    </Col>
  </Row>
</Grid>
        <hr/>
        <p className="App-intro">
           <code>&copy; All Rights are reserved to owais 2018 code</code>
        </p>

      </div>
    );
  }
}

export default About;
