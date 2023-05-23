import React, { useEffect, useState } from 'react';
import GameCard from '../GameCards/gameCard';
import './gameList.css'
import Header from '../Header/header';

function GameList() {
  const [games, setGames] = useState([]);
  const [sortBy, setSortBy] = useState('popularity');
  const[query,setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=${sortBy}`, {
          method: 'GET',
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
  }, [sortBy]);
  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  }
  
  const onSearch = (query) => {
    setQuery(query);}

  return (
    <>
    <Header onSearch={onSearch} />
      <h1>Games List</h1>

  <select  value={sortBy} onChange={handleSortChange} className="select" id="inputGroupSelect">
    <option value="popularity">Popularity</option>
    <option value="alphabetical">Alphabetical</option>
    <option value="release-date">Release Date</option>
  </select>
      <div className='gCards'>
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

export default GameList;