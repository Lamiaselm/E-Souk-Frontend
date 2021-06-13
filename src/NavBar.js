import React from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import logo from "./Assets/e-souk-logo.png";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img className="logo-nav" src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Button className="nav-button" variant="outline-warning">
              Login
            </Button>
            <Button variant="warning">
              <FontAwesomeIcon icon={faShoppingCart} /> &nbsp; My Cart
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
