import React from 'react'
import Button from './Button'

const Scoreboard = () => {
  let isNameHere = window.localStorage.getItem('SignUpCred')
  let games = JSON.parse(window.localStorage.getItem(isNameHere)) || []

  return (
    <div className='userscores-screen'>
      <header className='userscores-content'>
        <h1>HALL OF FAME</h1>
        <h2>{isNameHere}</h2>
        <div className='grid-titles'>
          <h2>RANK</h2>
          <h2>SCORE</h2>
          <h2>DATE</h2>
        </div>
        <div className='grid-container'>
          <div className='rank-column'>
            {games.map((game, i) => (
              <h3 key={game.score + i}>{i + 1}</h3>
            ))}
          </div>
          <div className='score-column'>
            {games.map((game, i) => (
              <h3 key={game.score + i}>{game.score}</h3>
            ))}
          </div>
          <div className='date-column'>
            {games.map((game, i) => (
              <h3 key={game.score + i}>{game.date}</h3>
            ))}
          </div>
          <div />
        </div>
        <h4>Play again to beat your own high score!</h4>
        <Button buttonText={'PLAY AGAIN'} pathName={'play'} />
      </header>
    </div>
  )
}

export default Scoreboard;



// import React from "react";

// function Scoreboard(props) {

//   return (
//     <div className="scoreboard-wrapper">
//         {/* shown only if game has been played */}
//         <h2>Your Score: (score variable)</h2>
//         {/* shown only if not logged in */}
//         <p>Want to save your score? Create an account.</p>
//         {/* Shown only if logged in */}
//         <table>
//             <tr>
//                 <td>table data...</td>
//             </tr>
//         </table>
//     </div>
//   );
// }

// export default Scoreboard;