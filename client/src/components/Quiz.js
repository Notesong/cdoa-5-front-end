import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import axios from 'axios';
import CelebCard from './CelebCard';
import Timebar from "./Timebar";


const Quiz = () => {
  const randomID = () => {
    return Math.floor(Math.random() * 200 +1)
    // randomizes questions
  }
// celeb data
const [data, setData] = useState({})
// collects Id for correct answers 
const [id, setId] = useState(Math.floor(Math.random() * 200 +1))
// sets score
const [score, setScore] = useState(0)
const [userAnswer, setUserAnswer] = useState(0)
// for timer
const [time, setTime]= useState(false)
const [wrongDeadG, setWrongDeadG] = useState(false)
const [ wrongAliveG, setWrongAliveG] = useState(false)

// this is where we will grab data from our API

useEffect(() => {
  axios
  .get(
   `https://cdoa5-backend.herokuapp.com/
   `
  )
  .then((e) => {
    e.status ? setData(e.data): console.log("thumbs up")
  })
  .catch((err) => {
    console.log("Error fetching data", err)
    setId(randomID())
  })
}, [id])

// timer set for 30secs but we can decide on timer later
useEffect(() => {
  const timer = setTimeout(() => setTime(true), 30000)
  return () => clearTimeout(timer)
}, [])

// useEffect(() => {
//   const timerExtra = setTimeout(() => setTime(true), 15000)
//   return () => clearTimeout(timerExtra)
// }, [])

//  now we check and see if the user guessed dead here
const isDeadCeleb = (dead) => {
  if (dead > 0) {
    setScore(score +1)
    setWrongDeadG(false)
  } else {
    setWrongDeadG(true)
  }
  // next Celeb
  setId(randomID())
  setUserAnswer(userAnswer + 1)
}

// checks and sees if the celeb is Alive
const isAlive = (alive) => {
  if (alive ===0) {
    setScore(score + 1)
    setWrongAliveG(false)
  }else{
    setWrongAliveG(true)
  }

  // next celeb
  setId(randomID())
  setUserAnswer(userAnswer + 1)
}

window.localStorage.setItem('CorrectGuesses', JSON.stringify(score))
window.localStorage.setItem('TotalGuesses', JSON.stringify(userAnswer))

return (
//  whole game (will need to set up data points i.e (death and alive from API)
  <div className='game-quiz'>
    <Route
    path='/Quiz'
    render={() =>
    time ? (
      <Redirect to='/QuizOver'/>
    ) : (
      <div className='p-content'>
        <div className='score-status'>
          <h3>Guesses: &nbsp;&nbsp; {userAnswer}</h3>
          <h3>Correct: &nbsp;&nbsp; {score}</h3>
        </div>
        <Timebar />
        {data ? <CelebCard data={data} /> : <div>Loading...</div>}
        <button onClick={()=> isDeadCeleb(data.death)}
        className={wrongDeadG ? 'wrong' : ''}
        >Dead</button>
        <button
        onClick={()=> isAlive(data.death)}
        className={wrongAliveG ? 'wrong': ''}
        >Alive</button>
        </div>
    )
    }
    />
  </div>
  
)
}

export default Quiz;


// import React from "react";
// import CelebCard from './CelebCard';

// function Quiz(props) {

//   // axios for CelebCard here?

//   return (
//     <div className="quiz-wrapper">
//       <section>
//         <div>
//           <p>Score: (score variable)</p>
//         </div>
//         <div>
//           <p>(timer)</p>
//         </div>
//       </section>
//       <CelebCard />
//     </div>
//   );
// }

// export default Quiz;