import React, { useState } from 'react';
import Axios from 'axios';
import { BASE_URL } from '../App';

// not currently being used in the app
// meant to prompt a user to register
const Register = (props) => {

    const [registerUser, setRegisterUser] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setRegisterUser({ ...registerUser, [e.target.name]: e.target.value })
    }

    const registration = async () => {
        try {
            // attempt to register user
            await Axios.post(`${BASE_URL}api/register`, {
                username: registerUser.username,
                password: registerUser.password
            })
            // if registration is successful, log them in
            const res = await Axios.post(`${BASE_URL}api/login`, {
                username: registerUser.username,
                password: registerUser.password
            })
            // set items to local storage for later retrieval
            localStorage.setItem('id', res.data.id);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('registerUser', registerUser.username);
            props.setIsLoggedIn(true);
            // go to success page if registration is successful
            props.history.push('/Success')
        } catch (error) {
            alert("Registration unsuccessful.")
            console.log('Registration unsuccessful.', error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        registration()
    }

    return (
        <div className='register-user'>
            <h2>Signup</h2>
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
                <button className="button" type={'submit'}>Submit</button>
            </form>
        </div>
    )
}

export default Register;

// import React, { useState } from 'react';
// import Button from "./Button";

// const Register = () => {
//     const [registerUser, setRegisterUser] = useState({
//         username: '',
//         email: '',
//         password: ''
//     })

//     const handleChange = (e) => {
//         setRegisterUser({ ...registerUser, [e.target.name]: e.target.value })
//     }

//     window.localStorage.setItem('registerUser', registerUser.username)

//     return (
//         // signup form to allow user to save scores in the database
//         // requires a username, email, and password
//         // the username is used to personalize the website and scores
//         // the username is not used to login
//         <div className='register-user'>
//             <h2>Signup</h2>
//             <form>
//                 <label htmlFor='Username'>
//                    Username
//                     <input
//                     placeholder='Enter a username'
//                     value={registerUser.username}
//                     name='username'
//                     type='name'
//                     onChange={handleChange}
//                     maxLength="20"
//                     required
//                     />
//                 </label>
//                 <label htmlFor='Email'>
//                     Email
//                     <input
//                     placeholder='Enter your email'
//                     value={registerUser.email}
//                     name='email'
//                     type='email'
//                     onChange={handleChange}
//                     maxLength="40"
//                     required
//                     />
//                 </label>
//                 <label htmlFor='password'>
//                     Password (4-20 characters)
//                 <input
//                     type='password'
//                     placeholder='Enter a password'
//                     value={registerUser.password}
//                     name='password'
//                     onChange={handleChange}
//                     maxLength="20"
//                     minLength='4'
//                     required
//                 />
//                 </label>
//                 <div className="buttons">
//                     <Button type='submit' buttonText={'Submit'} pathName={''}/>
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default Register;
