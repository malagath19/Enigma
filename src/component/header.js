import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./header.css";
export default class Header extends Component {
  render() {
    return (
      <Container fluid="true">
        <Row className="border-radius">
          <Col className="row-view">
            <img src="/static/images/e-logo.jpg" alt="abes" className="img" />
            <h2 style={{ marginLeft: 4, marginTop: 17 }}>Enigma</h2>
          </Col>
          <Col className="size">
            <Link to="/Blogs" style={{ marginLeft: 40, color: "black" }}>
              BLOGS
            </Link>
            <Link to="/contest" style={{ marginLeft: 40, color: "black" }}>
              Contest
            </Link>
            <Link to="/Problems" style={{ marginLeft: 40, color: "black" }}>
              Problems
            </Link>
          </Col>
          <Col className="displayrow">
            <Link to="/Problems" style={{ marginLeft: 900, color: "black" }}>
              Login
            </Link>
            <Link to="/Problems" style={{ marginLeft: 40, color: "black" }}>
              Signup
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}
