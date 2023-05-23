import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';

import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Figure from 'react-bootstrap/Figure';
import './GameDetails.css'
import Header from '../../components/Header/header';


const GameDetails = ({ id }) => {
  const [game, setGame] = useState({});
  const { id: gameId } = useParams();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id || gameId}`;
    const options = {
      method: 'GET',
      headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': '0c0f491236msh8a2e8d0661c001ep1a5d93jsn63204154cc26',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setGame(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <Container className='ctainer'>
      <Row className='headings'>
      <Col xs={4} md={4}>
      <Figure>
      <Figure.Image
        width={150}
        height={180}
        alt="171x180"
        src={`${game.thumbnail}`}
      />
    </Figure>
        </Col>
        <Col xs={4} md={4}>
        <h3>{game?.title}</h3>
        </Col>
        <Col xs={2} md={3}>
        <h4>{game?.genre}</h4>
        </Col>
        <Col xs={2} md={3}>
        <h4>{game?.publisher}</h4>
        </Col>
      </Row>
      <Row className='desc'>
        <Col xs={6} md={4}>
        <Link to={game?.game_url}>
        <Button className="btn" variant="primary">
          PLAY
        </Button></Link>
        </Col>
        <Col xs={6} md={4}>
        <h5>{game?.release_date}</h5>
        </Col>
        <Col xs={6} md={4}>
        <h5>{game?.platform}</h5>
        </Col>
      </Row>
      <Row className='sysReq'><Col xs={6} ><h4>System Requirements</h4></Col></Row>
      <Row className='sysDet'>
      <Col xs={3}><h6>{game?.minimum_system_requirements?.os}</h6></Col>
<Col xs={3}><h6>{game?.minimum_system_requirements?.processor}</h6></Col>
<Col xs={3}><h6>{game?.minimum_system_requirements?.memory}</h6></Col>
<Col xs={3}><h6>{game?.minimum_system_requirements?.storage}</h6></Col>
      </Row>
      <Row className='carousel'>
  <Col xs={6}><h4>Screenshots</h4></Col>
   <Carousel slide={true}>
      {game?.screenshots?.map(screenshot => (
        <Carousel.Item  key={screenshot.id} className='d-block w-100 '>
          <img src={screenshot.image} alt={`Screenshot ${screenshot.id}`} />
        </Carousel.Item>
      ))}
    </Carousel></Row>

    </Container>
    </>
  );
}

export default GameDetails;
