import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";

const Cards = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <Card style={{ width: "18rem", height: "100%" }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Button
            onClick={(e) => navigate(`/edit?url=${props.img}`)}
            variant="primary"
          >
            Edit
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
