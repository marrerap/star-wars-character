import React from "react";
import { useParams, Redirect } from "react-router-dom";
import { Container, Card } from "react-bootstrap";

export default function CharacterProfile(props) {
  const { id } = useParams();
  const { characters } = props;
  const character = characters[id];
  
  if (!character) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <Card style={{ width: "18rem", margin: '20px' }}>
        <Card.Body>
          <Card.Title>{character.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Birth Year: {character.birth_year}<br/>
            Eye Color: {character.eye_color}<br/>
            Weight: {character.mass}kg
          </Card.Subtitle>
          
          </Card.Body>
      </Card>
    </Container>
  );
}
