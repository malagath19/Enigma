import React, { Component } from "react";
import { Container, Carousel } from "react-bootstrap";
import './firstpage.css'
export default class Firstpage extends Component {
  render() {
    return (
      <Container className="margin-top" fluid="true" >
        <Carousel>
          <Carousel.Item  className="size">
            <img 
              className="d-block w-100"
              src="/static/images/img1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="size">
            <img
              className="d-block w-100"
              src="/static/images/img2.jpg"
              alt="second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    );
  }
}
