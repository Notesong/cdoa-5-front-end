import React, { useState } from 'react';
import Axios from 'axios';
import { BASE_URL } from '../App';
import { parse } from 'url';

// not currently being used in the app
// meant to prompt a user to register

const UserName = () => {

    const score = localStorage.getItem("GameScore");

    const [registerUser, setRegisterUser] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setRegisterUser({ ...registerUser, [e.target.name]: e.target.value })
    }
    
    // const [ playerName, setPlayerName] = useState('')

    const scoreToDataBase = async () => {
        try {
            var id = localStorage.getItem('id') || '';
            var token = localStorage.getItem('token') || '';
            //const token = localStorage.getItem('token') || '';
            if(id) {
                // console.log(id)
                // await Axios.put(`${BASE_URL}api/auth/users/${res.data.id}`, {
                //     score: score
                // })
            }else{
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


                // const api = 'your api'; 
                // const token = JSON.parse(sessionStorage.getItem('data'));
                // const token = user.data.id;       /*take only token and save in token variable*/
                // axios.get(api , { headers: {"Authorization" : `Bearer ${token}`} })


            }
        } catch (error) {
            alert("Score Not Saved")
            console.log('Score not saved', error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        scoreToDataBase()
        localStorage.setItem('registerUser', registerUser.username)
    }

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
                    Password (4-20 characters)<br />
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
}

export default UserName;