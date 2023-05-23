import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home/home';
import GameList from './components/GameList/gameList';
import GameDetails from './pages/GameDetails/GameDetails';
import './App.css'

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path='/' element={<Home />} exact></Route>
                <Route path="games" element={<GameList />}></Route>
                <Route path="/game/:id" element={<GameDetails />} ></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
