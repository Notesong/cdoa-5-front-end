import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import axios from 'axios';
import CelebCard from './CelebCard';
import Timebar from "./Timebar";

const Quiz = () => {
  // celeb data
  const [data, setData] = useState([])
  // current celeb
  const [currentCeleb, setCurrentCeleb] = useState({id: 11, name: "Bruce Willis", imageUrl: "", isDead: false})
  // current ID
  const [id, setId] = useState(0)
  // sets score
  const [score, setScore] = useState(0)
  const [userAnswer, setUserAnswer] = useState(0)
  // for timer
  const [time, setTime] = useState(false)

  // this is where we will grab data from our API
  useEffect(() => {
    axios
    .get(
    `https://cdoa5-backend.herokuapp.com/api/celebs/`
    )
    .then((e) => {
      e.status ? setData(e.data): console.log("thumbs up")
    })
    .catch((err) => {
      console.log("Error fetching data", err)
    })
  }, [])

  // timer set for 30secs but we can decide on timer later
  useEffect(() => {
    const timer = setTimeout(() => setTime(true), 30000)
    return () => clearTimeout(timer)
  }, [])

  //  now we check and see if the user guessed dead here
  // Adjusts score appropriately
  const isDead = (dead) => {
    if (dead) {
      setScore(score + 1)
    }
    finalizeAnswer()
  }

  // checks and sees if the celeb is Alive
  // Adjusts score appropriately
  const isAlive = (dead) => {
    if (!dead) {
      setScore(score + 1)
    } 
    finalizeAnswer()
  }

  // change the current celeb
  const changeCeleb = () => {
    setCurrentCeleb(data[id])
    // loop through celebs
    if (id === data.length - 1) {
      setId(0)
    } else {
      setId(id + 1)
    }
  }
  
  // update number of answers and changes the current celeb
  const finalizeAnswer = () => {
    setUserAnswer(userAnswer + 1)
    changeCeleb()
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
            {/* <Timebar /> */}
            {data.length > 0 ? <CelebCard currentCeleb={currentCeleb} /> : <div>Loading...</div>}
            <button onClick={()=> isDead(currentCeleb.death)}>Dead</button>
            <button onClick={()=> isAlive(currentCeleb.death)}>Alive</button>
            </div>
        )
      }
      />
    </div>
  )
}

export default Quiz;