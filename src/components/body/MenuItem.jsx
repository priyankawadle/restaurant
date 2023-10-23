import { React, Fragment } from "react";
import { Card, Container, Col } from "react-bootstrap";

export let MenuItem = (props) => {
  return (
    <div>
      <Fragment>
        <Container>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={props.dish.image} />
              <Card.Body>
                <Card.Title
                  style={{ cursor: "pointer" }}
                  onClick={() => props.DishSelect(props.dish)}
                >
                  {props.dish.name}
                </Card.Title>
                <Card.Text>{props.dish.description}</Card.Text>
                <p>
                  <b>Price: {props.dish.price}</b>
                </p>
                <p>
                  <b>Label: {props.dish.label}</b>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Container>
      </Fragment>
    </div>
  );
};
