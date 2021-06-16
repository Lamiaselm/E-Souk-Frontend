import React , { useEffect } from "react";
import NavBar from "./NavBar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";
import Article from "./ArticleCard"
import ArticleCard from "./ArticleCard";
import {api} from "../scripts/api"
const imprimante = "/canon-imprimante-pixma-ts3350-multifonction-jet-d.jpeg";
const mac = "/macbook-pro-2017.jpeg";
const mouse = "/41VkzplsASL._SL500_.jpg";
const f1 = "/Robe-habillee-fille-marine-ROFEFI005-big.jpeg";
const f2 = "/ec092d1c550231d2be6c03330d946832.jpeg";
const g1 = "/51aR8tzdoLL._AC_SX425_.jpg";
const g2 = "/7541080-227.jpeg";
const dell = "/dell.jpg";

export default function Home() {
  
  let Articles = [] ;
  const chargeArticles = () =>{
    let page = 1 ; 
    api.get(`/artciles/${page}`)
    .then( res => Articles = res.data )
    .catch( err=> console.log(err))
  }
  useEffect(() => {
      chargeArticles()
  }, [])

  return (
    <div>
      <NavBar />
      <div className="category">
        <h3>Informatique & Bureattique</h3>
      </div>
      <div className="card-container">
        <ArticleCard id={1} imageurl={dell} title="Pc portable" description="Some quick example text to build on the card title and make up the
              bulk of the card's content." />
        <ArticleCard id={1} imageurl={mac} title="Macbook" description="Some quick example text to build on the card title and make up the
              bulk of the card's content." />
        <ArticleCard id={1} imageurl={imprimante} title="Imprimante Canon" description="Some quick example text to build on the card title and make up the
              bulk of the card's content." />
        <ArticleCard id={1} imageurl={mouse} title="Souris gamer" description="Some quick example text to build on the card title and make up the
              bulk of the card's content." />
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
            <Button variant="outline-dark" style={{ marginRight: "20px" }}>
              Detail
            </Button>
            <Button variant="warning home">Order product</Button>{" "}
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
            <Button variant="outline-dark" style={{ marginRight: "20px" }}>
              Detail
            </Button>
            <Button variant="warning home">Order product</Button>{" "}
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
            <Button variant="outline-dark" style={{ marginRight: "20px" }}>
              Detail
            </Button>
            <Button variant="warning home">Order product</Button>{" "}
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
            <Button variant="outline-dark" style={{ marginRight: "20px" }}>
              Detail
            </Button>
            <Button variant="warning home">Order product</Button>{" "}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
