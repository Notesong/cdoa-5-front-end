import React, { useState } from 'react';
import Axios from 'axios';
import { BASE_URL } from '../App';

// not currently being used in the app
// meant to prompt a user to register

const UserName = ({ setIsLoggedIn }) => {

    const score = localStorage.getItem("GameScore");

    const [registerUser, setRegisterUser] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setRegisterUser({ ...registerUser, [e.target.name]: e.target.value })
    }
    
    // const [ playerName, setPlayerName] = useState('')

    const scoreToDataBase = async () => {
        try {
            await Axios.post(`${BASE_URL}api/register`, {
                username: registerUser.username,
                password: registerUser.password
            })
            const res = await Axios.post(`${BASE_URL}api/login`, {
                username: registerUser.username,
                password: registerUser.password
            })
            localStorage.setItem('id', res.data.id);
            localStorage.setItem('token', res.data.token);
            await Axios.put(
                `${BASE_URL}api/auth/users/${res.data.id}`, 
                {score: score},
                {headers: {Authorization: `${res.data.token}`}}
            )
            localStorage.setItem('registerUser', registerUser.username)
            setIsLoggedIn(true);
        } catch (error) {
            alert("Score Not Saved");
            console.log('Score not saved', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        scoreToDataBase();
    };

    return (
        <div className='user-form'>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor='username'>
                   Username<br />
                    <input
                    placeholder='Enter a username'
                    value={registerUser.username}
                    name='username'
                    type='username'
                    onChange={handleChange}
                    maxLength="20"
                    />
                </label>
                <label htmlFor='password'>
                    Password <span className="small-type">(4-20 characters)</span><br />
                <input
                    type='password'
                    placeholder='Enter a password'
                    value={registerUser.password}
                    name='password'
                    onChange={handleChange}
                    maxLength="20"
                    minLength="4"
                />
                </label>
                <button className="button small" type={'submit'}>Submit</button>
            </form>
        </div>
    )
};

export default UserName;