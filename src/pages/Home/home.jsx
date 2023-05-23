import React, { useEffect, useState } from 'react';
import GameCard from '../../components/GameCards/gameCard';
import CarouselSlides from '../../components/carasoul/Carousels';
import Container from 'react-bootstrap/Container';
import './home.css';
import Header from '../../components/Header/header';

function Home() {
  const [query, setQuery] = useState('');
  const[games,setGames]=useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=popularity`,
          {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': '0c0f491236msh8a2e8d0661c001ep1a5d93jsn63204154cc26',
              'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
            },
          }
        );
        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const onSearch = (query) => {
    setQuery(query);}
    return (
      <>
        <Header onSearch={onSearch}/>
       
        
        
        <div className="gCards">
        {games
          .filter((game) =>
            game.title.toLowerCase().includes(query.toLowerCase())
          )
          .map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </>
    );
  }
  
  export default Home;