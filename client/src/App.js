
import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Quiz from './components/Quiz';
import Scoreboard from './components/Scoreboard';
import login from './components/Login'
import register from './components/register';
import celebCard from './components/CelebCard';
// import Login from "./components/Login";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Celebrity Dead or Alive</h1>
        <nav>
          <Link to='/quiz'>Quiz</Link>
          {/* only displayed if logged in */}
          <Link to='/scoreboard'>Scoreboard</Link>
          <Link to='/login'>Login</Link>
          <Link to='/register'>Signup</Link>
        </nav>
      </header>
      <main>
        <Route path='/quiz' component={Quiz} />
        <Route path='/scoreboard' component={Scoreboard} />
        <Route path='/login' component={login} />
        <Route path='/register' component={register} />
      </main>
    </div>
  );
}

export default App;
