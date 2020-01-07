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
                <label htmlFor='username'>
                    Email
                    <input
                    placeholder='email'
                    value={registerUser.email}
                    name='email'
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