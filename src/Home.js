import React from "react";
import NavBar from "./NavBar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import imprimante from "./Assets/canon-imprimante-pixma-ts3350-multifonction-jet-d.jpeg";
import mac from "./Assets/macbook-pro-2017.jpeg";
import baffe from "./Assets/9179UILdcKL._AC_SS450_.jpg";
import mouse from "./Assets/41VkzplsASL._SL500_.jpg";
import f1 from "./Assets/Robe-habillee-fille-marine-ROFEFI005-big.jpeg";
import f2 from "./Assets/ec092d1c550231d2be6c03330d946832.jpeg";
import g1 from "./Assets/51aR8tzdoLL._AC_SX425_.jpg";
import g2 from "./Assets/7541080-227.jpeg";

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
          <Card.Img variant="top" src={mouse} style={{ width: "75%" }} />
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
      <div className="category">
        <h3>Vêtements Enfant</h3>
      </div>
      <div className="card-container">
        <Card className="card">
          <Card.Img variant="top" src={f1} style={{ width: "100%" }} />
          <Card.Body>
            <Card.Title>Robe marine</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="warning">Detail</Button>
          </Card.Body>
        </Card>
        <Card className="card">
          <Card.Img variant="top" src={f2} style={{ width: "100%" }} />
          <Card.Body>
            <Card.Title>Ensemle été</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="warning">Detail</Button>
          </Card.Body>
        </Card>
        <Card className="card">
          <Card.Img variant="top" src={g1} style={{ width: "75%" }} />
          <Card.Body>
            <Card.Title>Ensemble classique</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="warning">Detail</Button>
          </Card.Body>
        </Card>
        <Card className="card">
          <Card.Img variant="top" src={g2} style={{ width: "75%" }} />
          <Card.Body>
            <Card.Title>Ensemble été</Card.Title>
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
