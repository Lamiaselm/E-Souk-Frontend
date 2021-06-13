import React from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import logo from "./Assets/e-souk-logo.png";
import Button from "react-bootstrap/Button";
import cart from "./Assets/shopping-cart.svg";

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <img className="logo-nav" src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Button className="nav-button" variant="outline-warning">
              Login
            </Button>{" "}
            <Button variant="warning">
              {" "}
              <i class="fas fa-shopping-cart"></i>My Cart
            </Button>{" "}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
