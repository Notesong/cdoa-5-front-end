
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Quiz from './components/Quiz';
// import Scoreboard from './components/Scoreboard';
import Register from './components/register';
// import CelebCard from './components/CelebCard';
import Login from "./components/Login";
import QuizStart from './components/QuizStart';
import Nav from './components/Nav';
import QuizOver from './components/QuizOver';
import Scoreboard from './components/Scoreboard';
import BurgerIcon from "./components/BurgerIcon";
import Menu from "./components/Menu";
import Popup from "reactjs-popup";
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  marginTop: "40px"
};
const contentStyle = {
  background: "rgba(255,255,255,0)",
  width: "80%",
  border: "none"
};

export const BASE_URL = `https://cdoa5-backend.herokuapp.com/`;


 export default function App() {
  
  return (
    <div className="App" style={styles}>
      <header className="App-header">
        <h1>Celebrity Dead or Alive</h1>  
        <Nav/>
      </header>
      {/* Popup from: https://codesandbox.io/s/lpo41x20kq */}
      <Popup
        modal
        overlayStyle={{ background: "rgba(255,255,255,0.98" }}
        contentStyle={contentStyle}
        closeOnDocumentClick={false}
        trigger={open => <BurgerIcon open={open} />}
      >
        {close => <Menu close={close} />}
      </Popup>
      <div className="lower">
        <Switch>
          <Route exact path='/' component={QuizStart}/>
          <Route path='/Scoreboard' component={Scoreboard} />
          <Route path='/Quiz' component={Quiz} />
          <Route path='/QuizOver' component={QuizOver} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/AboutUs' component={AboutUs} />
        </Switch>        
      </div>
      <Footer />
    </div>
  );
}


