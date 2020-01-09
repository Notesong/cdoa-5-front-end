import React, { useState } from 'react';
import Axios from 'axios';
import { BASE_URL } from '../App';
import { parse } from 'url';


const UserName = (props) => {
    const [ playerName, setPlayerName] = useState('')

    const handleChange = (e) => {
        setPlayerName(e.target.value)
    }

    const scoreToDataBase = async () => {
        try {
            const id = localStorage.getItem('id') || '';
            if(id) {
                await Axios.post(`${BASE_URL}/api/register`, {
                    player_id: parse(id),
                    score: props.score
                })
            }else{
                const newPlayer = await Axios.post(`${BASE_URL}/api/register`, {
                    name: playerName,
                    email: `default${Date.now()}@gmail.com`,
                    password: 'default'
                })
                localStorage.setItem('id', newPlayer.data.id)
                await Axios.post(`${BASE_URL}/api/score`, {
                    player_id: newPlayer.data.id,
                    score: props.score
                })
            }
        } catch (error) {
            alert("Score Not Saved")
            console.log('Score not saved', error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        scoreToDataBase()
        localStorage.setItem('registerUser', playerName)
        setPlayerName('')
    }

    return (
        <div className='user-form'>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor='firstname'>
                    name
                    <input
                    placeholder='Your Name'
                    value={playerName}
                    name='firstname'
                    onChange={handleChange}
                    />
                    {/* <input 
                    placeholder='Your email'
                    value='email'
                    name='email'
                    onChange={handleChange}
                    /> */}
                </label>
                <button type={'submit'}>Submit</button>
            </form>
        </div>
    )
}

export default UserName;