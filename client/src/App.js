
import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Quiz from './components/Quiz';
import Scoreboard from './components/Scoreboard';
import Register from './components/register';
// import CelebCard from './components/CelebCard';
import Login from "./components/Login";


 export default function App() {
  return (
    <div className="App">
       <header className="App-header">
        <h1>Celebrity Dead or Alive</h1>
        <nav>
          <Link to='/Quiz'>Quiz</Link>
         {/* only displayed if logged in */}
          <Link to='/scoreboard'>Scoreboard</Link>
          <Link to='/login'>Login</Link>
          <Link to='/register'>Signup</Link>
        </nav>
       </header>
      <Switch>
        <Route path='/Quiz' component={Quiz} />
        <Route path='/scoreboard' component={Scoreboard} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </Switch>
    </div>
  );
}


