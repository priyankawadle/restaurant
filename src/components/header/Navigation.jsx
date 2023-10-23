import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import  "../../assets/css/Main.css"
import logo from "../../assets/image/logo.png"

export let Navigation = () => {
  return (
    <Navbar expand="lg" bg="dark">
      <Container>
        <Navbar.Brand href="/"> <img src={logo} React-Bootstrap ></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/" className="mainMenu">
                {" "}
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/menu" className="mainMenu">
                {" "}
                Menu
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about" className="mainMenu">
                {" "}
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contact" className="mainMenu">
                {" "}
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
