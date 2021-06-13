import React from "react";
import NavBar from "./NavBar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import imprimante from "./Assets/canon-imprimante-pixma-ts3350-multifonction-jet-d.jpeg";
import mac from "./Assets/macbook-pro-2017.jpeg";
import baffe from "./Assets/9179UILdcKL._AC_SS450_.jpg";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="category">
        <h3>Informatique & Bureattique</h3>
      </div>
      <div className="card-container">
        <Card className="card">
          <Card.Img variant="top" src={baffe} style={{ width: "75%" }} />
          <Card.Body>
            <Card.Title>Gamer Mouse</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="warning">Detail</Button>
          </Card.Body>
        </Card>
        <Card className="card">
          <Card.Img variant="top" src={mac} style={{ width: "75%" }} />
          <Card.Body>
            <Card.Title>MacBook Pro 2017</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="warning">Detail</Button>
          </Card.Body>
        </Card>
        <Card className="card">
          <Card.Img variant="top" src={imprimante} style={{ width: "75%" }} />
          <Card.Body>
            <Card.Title>Imprimante Canon</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="warning">Detail</Button>
          </Card.Body>
        </Card>
        <Card className="card">
          <Card.Img variant="top" src={imprimante} style={{ width: "75%" }} />
          <Card.Body>
            <Card.Title>Imprimante Canon</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="warning">Detail</Button>
          </Card.Body>
        </Card>
        <Card className="card">
          <Card.Img variant="top" src={imprimante} style={{ width: "75%" }} />
          <Card.Body>
            <Card.Title>Imprimante Canon</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="warning">Detail</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
