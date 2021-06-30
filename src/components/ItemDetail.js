import React from "react";
import NavBar from "./NavBar";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useHistory, useParams } from "react-router-dom";
import {api} from "../scripts/api"
import { useState , useEffect } from "react";
import { getUserId } from "../scripts/localStorageManager"

export default function ItemDetail() {

  const [article, setarticle] = useState({})
  const { id } = useParams()

  const userid = getUserId() ;

  const history = useHistory();

  const addToBasket = () => {
    if (userid)
      api.put(`panier/${userid}/add`,{ articleid : id})
      .then( res => { 
        setarticle(res.data)
        history.push("/cart");
      })
      .catch( err => console.log(err))
    else
      history.push("/login");
  }

  const Order= () => {
    history.push("/cart");
  };

  useEffect(() => {
    api.get(`article/${id}`)
    .then( res => { 
      setarticle(res.data)
    })
    .catch( err => console.log(err))
  }, [])

  return (
    <div>
      <NavBar />
      <Container style={{ marginTop: "120px" }}>
        <Row className="justify-content-md-center">
          <Col xs md="6">
            <div className="detail-img">
              <img className="cart-img" src={article.imageurl} style={{ width: "530px" }} />
            </div>
          </Col>
          <Col xs md="5" style={{ textAlign: "justify" }}>
            <h2>{article.title}</h2>
            <p>
              {article.description}
            </p>
            <p>
              <br/>
              Type : {article.type}
              <br/>
              Prix : {article.prix}
              <br/>
              Disponible : {article.quantity}
            </p>
            <Button
              variant="outline-dark"  
              onClick={Order}
            >
              Click here to Order
            </Button>
            <br/>
            <br/>
            <Button
              onClick={addToBasket}
            >
              Add to basket
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
