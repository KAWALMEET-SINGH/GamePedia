import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import './gameCard.css';
import { Link } from 'react-router-dom';

function GameCard({ game }) {
  return (
    <Card className="card">
      <Card.Img
        variant="top"
        src={`https://www.freetogame.com/g/${game?.id}/thumbnail.jpg`}
      />
      <Card.Body>
        <Card.Title>{game?.title}</Card.Title>
        <Card.Text>{game?.short_description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{game?.publisher}</ListGroup.Item>
        <ListGroup.Item>{game?.genre}</ListGroup.Item>
        <ListGroup.Item>{game?.platform}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <Link to={game?.game_url}>
        <Button className="btn" variant="primary">
          PLAY
        </Button></Link>
        <Link to={`/game/${game?.id}`}>
          <Button className="btn" variant="primary">
            MORE
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default GameCard;