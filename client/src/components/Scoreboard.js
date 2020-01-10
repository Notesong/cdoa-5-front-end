import React from 'react';
import Button from './Button';

const Scoreboard = () => {
  let isNameHere = window.localStorage.getItem('registerUser')
  let games = JSON.parse(window.localStorage.getItem(isNameHere)) || []  
  
  return (
    <div >
      <header >
        <h1>ALLLLL THE SCORES</h1>
        <h2>{isNameHere}</h2>
        <div>        </div>
        <div >
          <h2>RANK</h2>
          <div>
            {games.map((game, i) => (
              <h3 key={game.score + i}>{i + 1}</h3>
            ))}
          </div>
          <h2>SCORE</h2>
          <div >
            {games.map((game, i) => (
              <h3 key={game.score + i}>{game.score}</h3>
            ))}
          </div>
          <h2>DATE</h2>
          <div >
            {games.map((game, i) => (
              <h3 key={game.score + i}>{game.date}</h3>
            ))}
          </div>
          <div />
        </div>        
        <h4>Play again to beat your own high score!</h4>
        <Button buttonText={'PLAY AGAIN'} pathName={'Quiz'} />
      </header>
    </div>
  )
}

export default Scoreboard;