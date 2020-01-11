import React from 'react';
import Button from './Button';

const Scoreboard = () => {
  // retrieves name and games from storage
  let isNameHere = window.localStorage.getItem('registerUser')
  let games = JSON.parse(window.localStorage.getItem(isNameHere)) || []  
  
  return (
    <div className="scoreboard">
      <header>
        {/* displays general information about the player */}
        <h2>ALLLLL THE SCORES</h2>
        <h3>Player: {isNameHere}</h3>
        <div className="playagain">
          <h4>Play again to beat your own high score!</h4>
          <Button buttonText={'PLAY AGAIN'} pathName={'Quiz'} />
        </div>
      </header>
      <div className='board'>
        {/* scoreboard displays rank, score, and date played */}
        <div className='rank'>
          <h3>RANK</h3>
          {/* creates a rank from 1 and on, based on how many games were played */}
          {games.map((game, i) => (
            <h4 key={game.score + i}>{i + 1}</h4>
          ))}
        </div>
        {/* displays the score for the current game */}
        <div className='score'>
          <h3>SCORE</h3>
          {games.map((game, i) => (
            <h4 key={game.score + i}>{game.score}</h4>
          ))}
        </div>
        {/* displays the date the current game was played */}
        <div className='date'>
        <h3>DATE</h3>
          {games.map((game, i) => (
            <h4 key={game.score + i}>{game.date}</h4>
          ))}
        </div>
      </div>   
    </div>
  )
}

export default Scoreboard;