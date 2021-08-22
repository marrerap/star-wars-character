import React from "react";
import { Container, ListGroupItem, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CharacterList(props) {
  const { characters } = props;

  return (
    <Container>
      <ListGroup variant="flush">
        {characters.map((character, index) => {
          return (
            <ListGroupItem key={index}>
              <Link to={`/character/${index}`}>{character.name}</Link>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </Container>
  );
}
