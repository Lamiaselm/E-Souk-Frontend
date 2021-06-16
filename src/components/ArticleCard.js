import React from 'react'

import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ArticleCard = props => {
    const history = useHistory();
    function handleClick() {
        history.push(`/detail/${props.id}`);
    }
    return (
        <Card className="card">
            <Card.Img
                variant="top"
                src={props.imageurl}
                style={{ width: "98%", height: "51%" }}
            />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                {props.description}
                </Card.Text>
                <Button
                variant="outline-dark"
                style={{ marginRight: "20px" }}
                onClick={handleClick}
                >
                Detail
                </Button>
                <Button variant="warning home">Order product</Button>
            </Card.Body>
        </Card>
    )
}

export default ArticleCard
