import React from "react";
import Table from "react-bootstrap/Table";
import NavBar from "./NavBar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const dell = "/dell.jpg";
const f1 = "/Robe-habillee-fille-marine-ROFEFI005-big.jpeg";

export default function Cart() {
  return (
    <div>
      <NavBar />
      <div className="cart-container">
        <Table striped bordered>
          <thead style={{ background: "white" }}>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Sub Total</th>
            </tr>
          </thead>
          <tr></tr>
          <tbody>
            <tr style={{ backgroundColor: "#f5f5f5" }}>
              <td>1</td>
              <td style={{ textAlign: "left" }}>
                <img
                  className="cart-img"
                  src={dell}
                  style={{ width: "11%", marginRight: "40px" }}
                />
                Dell Inspiron I5, 8GB RAM, 1TB SSD
              </td>

              <td>
                <Form>
                  <Form.Group size="sm" controlId="email">
                    <Form.Control autoFocus type="number" />
                  </Form.Group>
                </Form>
              </td>
              <td>14000DA</td>
              <td>14000DA</td>
            </tr>
            <tr>
              <td>2</td>
              <td style={{ textAlign: "left" }}>
                <img
                  className="cart-img"
                  src={f1}
                  style={{ width: "11%", marginRight: "40px" }}
                />
                Robe fiellete bleu marine
              </td>

              <td>
                <Form>
                  <Form.Group size="sm" controlId="email">
                    <Form.Control autoFocus type="number" />
                  </Form.Group>
                </Form>
              </td>
              <td>3000DA</td>
              <td>3000DA</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <Container>
        <Row className="justify-content-md-end">
          <Col xs lg="2" style={{ fontSize: "20px" }}>
            <b>TOTAL :</b>
          </Col>
          <Col xs lg="2" style={{ color: "#ffc107", fontSize: "20px" }}>
            <b>17000DA</b>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <Button variant="outline-warning" size="lg">
              Click here to Pay
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
