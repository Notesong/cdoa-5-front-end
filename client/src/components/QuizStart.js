import React from 'react';
import Button from './Button';

const QuizStart = () => {
    let isNameHere = window.localStorage.getItem("registerUser") || ""

    return (
        <div className = 'Quiz_Start'>
            <header>
                {isNameHere === "" ? null : <h2> Lets Begin {isNameHere}!</h2>}
                <h2>You have 30 seconds to guess which of these Celebs are Dead or Alive!</h2>
            </header>
            <div>
                <Button buttonText={'Press Here to Begin!'} pathName={'Quiz'} />
                {isNameHere === "" ? <Button buttonText={'Login'} pathName={'Login'} /> : null}
            </div>
        </div>
    )
}

export default QuizStart;
