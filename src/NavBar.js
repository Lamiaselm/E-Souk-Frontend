import React from "react";
import { Nav, Navbar, Container, Form, FormControl } from "react-bootstrap";
import logo from "./Assets/e-souk-logo.png";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
      <Container>
        <Navbar.Brand href="#home" style={{ marginRight: "40px" }}>
          <img className="logo-nav" src={logo} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Form className="d-flex">
          <FormControl
            style={{ width: "300px" }}
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
          />
          <Button variant="outline-dark">Search</Button>
        </Form>
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
