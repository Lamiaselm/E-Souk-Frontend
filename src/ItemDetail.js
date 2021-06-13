import React from "react";
import NavBar from "./NavBar";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import imprimante from "./Assets/canon-imprimante-pixma-ts3350-multifonction-jet-d.jpeg";

export default function ItemDetail() {
  return (
    <div>
      <NavBar />
      <Container style={{ marginTop: "80px" }}>
        <Row className="justify-content-md-center">
          <Col xs lg="6">
            <div className="detail-img">
              <img
                className="cart-img"
                src={imprimante}
                style={{ width: "400px" }}
              />
            </div>
          </Col>
          <Col xs lg="6">
            <b>17000DA</b>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
