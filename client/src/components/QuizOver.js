import React from 'react';
import Button from './Button';
import UserName from './UserName';

const QuizOver = () =>{
    const correctGuesses = localStorage.getItem('CorrectGuesses');
    const guess = localStorage.getItem("TotalGuesses");

    let score = Math.floor(correctGuesses *(10 * (correctGuesses / guess)));

    if (isNaN(score)) {
        score = 0;
    }
    // call to DB
    let isNameHere = localStorage.getItem("registerUser") || "";
    localStorage.setItem('GameScore', JSON.stringify(score));

    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    
    if ( isNameHere) {
        let oldGames = JSON.parse(localStorage.getItem(isNameHere)) || [];
        let newGame = { score: score, date: today};
        oldGames.push(newGame);
        localStorage.setItem( isNameHere, JSON.stringify(oldGames));
    }

    return(
        <div className='Quiz_over'>
            <div className="end">
                {isNameHere ? (
                    <h2>Way to Go{`${isNameHere}`}</h2>
                ) :(
                    <h2>Way to Go!</h2>
                )}
                <h3> The Quiz is Over</h3>
                <h4>Correct Guesses: {correctGuesses}</h4>
                <h4>Total Guesses: {guess}</h4>
                <h2>Score: {isNaN(score) ? 0 : score}</h2>
                {isNameHere ? null : (
                    <div>
                        <h2>Enter Your Name to save your score and brag to all of your friends:</h2>
                        <UserName score={score}/>
                    </div>    
                )}
            </div>
            <a className="twitter-share-button"
        href={`https://twitter.com/intent/tweet?text=I%20scored%20${score}`}
        data-size="large">
        <img src="https://img.icons8.com/nolan/64/twitter.png" alt="twitter icon"></img>
        Tweet Your High Score here!</a>
            <Button buttonText = {'Play Again?'} pathName={'Quiz'} />
        </div>
    )
}
export default QuizOver;