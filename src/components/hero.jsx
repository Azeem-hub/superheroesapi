import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

const Hero = ({ id, name, image, connections, deleteHero }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image.url} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {readMore
              ? connections.relatives
              : connections.relatives.substring(0, 50)}
            <span
              className="text-decoration-none text-primary"
              style={{ cursor: "pointer" }}
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? "Show Less" : "Show More"}
            </span>
          </Card.Text>
          <Button
            variant="danger"
            className="w-100 mt-1"
            onClick={() => {
              deleteHero(id);
            }}
          >
            Remove
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Hero;
