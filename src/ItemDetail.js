import React from "react";
import NavBar from "./NavBar";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import dell from "./Assets/dell.jpg";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

export default function ItemDetail() {
  const history = useHistory();
  function handleClick() {
    history.push("/cart");
  }

  return (
    <div>
      <NavBar />
      <Container style={{ marginTop: "120px" }}>
        <Row className="justify-content-md-center">
          <Col xs md="6">
            <div className="detail-img">
              <img className="cart-img" src={dell} style={{ width: "530px" }} />
            </div>
          </Col>
          <Col xs md="5" style={{ textAlign: "justify" }}>
            <h2>Dell Inspiron</h2>
            <h4 style={{ color: "#a1a1a1" }}>I5, 8GB RAM, 1TB SSD </h4>
            <h3>50000 DA</h3>
            <p>
              Le lorem ipsum est, en imprimerie, une suite de mots sans
              signification utilisée à titre provisoire pour calibrer une mise
              en page, le texte définitif venant remplacer le faux-texte dès
              qu'il est prêt ou que la mise{" "}
            </p>
            <p>
              Le lorem ipsum est, en imprimerie, une suite de mots sans
              signification utilisée à titre provisoire pour calibrer une mise
            </p>
            <Button
              variant="outline-warning"
              size="lg"
              className="order-btn"
              //   onClick={handleClick}
            >
              Click here to Order
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
