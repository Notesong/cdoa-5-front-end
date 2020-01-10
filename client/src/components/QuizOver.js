import React from 'react';
import Button from './Button';
import UserName from './UserName';

const QuizOver = () =>{
    const correctGuesses = localStorage.getItem('CorrectGuesses');
    const guesses = localStorage.getItem("TotalGuesses");

    let score = Math.floor(correctGuesses *(10 * (correctGuesses / guesses)));

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
                    <h2>Time's up.<br />Way to Go {`${isNameHere}`}</h2>
                ) :(
                    <h2>Time's up.<br />Way to Go!</h2>
                )}
                <h4>Correct Guesses: {correctGuesses}</h4>
                <h4>Total Guesses: {guesses}</h4>
                <h3>Score: {isNaN(score) ? 0 : score}</h3>
                <Button buttonText = {'Play Again?'} pathName={'Quiz'} />
            </div>
            <div className="signup_share">
                {isNameHere ? null : (
                    <div>
                        <h3>Sign up to save your score and brag to all your friends:</h3>
                        <UserName score={score}/>
                    </div>    
                )}
                <h3><a className="twitter-share-button"
                    href={`https://twitter.com/intent/tweet?text=I%20scored%20${score}%20on%20CDoA`}
                    data-size="large">
                <i className="fab fa-twitter-square"></i> Tweet Your High Score!</a></h3>
            </div>

        </div>
    )
}
export default QuizOver;