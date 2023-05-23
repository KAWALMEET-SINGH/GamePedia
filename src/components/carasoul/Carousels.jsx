import React, { useState , useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './carousel.css'

function CarouselSlides() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', {
          method: 'GET',
          params: {
            'sort-by': 'release-date'
          },
          headers: {
            'X-RapidAPI-Key': '0c0f491236msh8a2e8d0661c001ep1a5d93jsn63204154cc26',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
          }
        });
        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <Carousel className='carousel ' interval={3000} variant="dark">
    {games.slice(0, 7).map((game) => (
      <Carousel.Item  key={game.id}>
        <img 
          className="d-block w-100 carouselImg"
          src={`https://www.freetogame.com/g/${game.id}/thumbnail.jpg`}
          alt="First slide"
        />
        <Carousel.Caption >
          <h5 className='carouselTitle'>{game.title}</h5>
          <p className='carouselDesc'>{game.short_description}</p>
        </Carousel.Caption>
      </Carousel.Item>
    ))}
  </Carousel>
  );
}

export default CarouselSlides;