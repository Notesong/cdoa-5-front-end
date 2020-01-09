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
            <form>
            <label htmlFor='Username'>
                   Username
                    <input
                    placeholder='username'
                    value={registerUser.username}
                    name='username'
                    type='name'
                    onChange={handleChange}
                    />
                </label>
                <label htmlFor='Email'>
                    Email
                    <input
                    placeholder='email'
                    value={registerUser.email}
                    name='email'
                    type='email'
                    onChange={handleChange}
                    />
                </label>
                <label htmlFor='password'>
                    Password
                <input
                type='password'
                placeholder='password'
                value={registerUser.password}
                name='password'
                onChange={handleChange}
                />
                </label>
                <Button type='submit' buttonText={'Submit'} pathName={''}/>
            </form>
        </div>
    )
}

export default Register;