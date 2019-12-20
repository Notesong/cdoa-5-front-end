
import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Quiz from './components/Quiz';
import Scoreboard from './components/Scoreboard';
import register from './components/register';
import celebCard from './components/CelebCard';
import Login from "./components/Login";
import Home from "./components/Home";
import styled from 'styled-components';

const Header = styled.header`
  background-color: #158FA4;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  color: white;
`;

const Nav = styled.nav`

`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 0.5rem;
`;

function App() {
  return (
    <div className="App">
      <Header className="App-header">
        <Title>Celebrity Dead or Alive</Title>
        <Nav>
          <NavLink to='/quiz'>Quiz</NavLink>
          {/* only displayed if logged in */}
          <NavLink to='/scoreboard'>Scoreboard</NavLink>
          <NavLink to='/login'>Login</NavLink>
          <NavLink to='/register'>Signup</NavLink>
        </Nav>
      </Header>
      <main>
        <Route exact path='/' component={Home} />
        <Route path='/quiz' component={Quiz} />
        <Route path='/scoreboard' component={Scoreboard} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={register} />
      </main>
    </div>
  );
}

export default App;
