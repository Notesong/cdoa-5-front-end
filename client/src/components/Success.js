import React from 'react';

const Success = () =>{

    let isNameHere = localStorage.getItem("registerUser") || "";

    return(
        <div className='success'>
            <h2>Success!</h2>
            <h3>Welcome, {isNameHere}.</h3>
        </div>
    )
}
export default Success;