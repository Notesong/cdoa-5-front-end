
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Quiz from './components/Quiz';
import Scoreboard from './components/Scoreboard';
import Register from './components/register';
// import CelebCard from './components/CelebCard';
import Login from "./components/Login";
import QuizStart from './components/QuizStart';
import Nav from './components/Nav';

export const BASE_URL = `https://cdoa5-backend.herokuapp.com/`;


 export default function App() {
  
  return (
    <div className="App">
       <header className="App-header">  
       <Nav/>
        <h1>Celebrity Dead or Alive</h1>
       </header>
      
      <Switch>
        <Route exact path='/' component={QuizStart}/>
        <Route path='/Quiz' component={Quiz} />
        <Route path='/scoreboard' component={Scoreboard} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </Switch>
    </div>
  );
}


