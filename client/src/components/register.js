import React, { useState } from 'react';
import Button from "./Button";

const Register = () => {
    const [registerUser, setRegisterUser] = useState({
        username: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setRegisterUser({ ...registerUser, [e.target.name]: e.target.value })
    }

    window.localStorage.setItem('registerUser', registerUser.username)

    return (
        <div className='register-user'>
            <h2>Signup</h2>
            <form>
                <label htmlFor='Username'>
                   Username
                    <input
                    placeholder='Enter a username'
                    value={registerUser.username}
                    name='username'
                    type='name'
                    onChange={handleChange}
                    maxLength="20"
                    />
                </label>
                <label htmlFor='Email'>
                    Email
                    <input
                    placeholder='Enter your email'
                    value={registerUser.email}
                    name='email'
                    type='email'
                    onChange={handleChange}
                    maxLength="20"
                    />
                </label>
                <label htmlFor='password'>
                    Password
                <input
                    type='password'
                    placeholder='Enter a password'
                    value={registerUser.password}
                    name='password'
                    onChange={handleChange}
                    maxLength="20"
                />
                </label>
                <div className="buttons">
                    <Button type='submit' buttonText={'Submit'} pathName={''}/>
                </div>
            </form>
        </div>
    )
}

export default Register;