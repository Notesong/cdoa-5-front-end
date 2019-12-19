import React from "react";
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const LoginForm = ({errors, touched}) => {
 
  return (
   <Form className='loginForm'>
     <h1>CDOA</h1>
     <p>Login</p>
     <div>
       {touched.username && errors.username && <p>{errors.username}</p>}
       < Field className='field'
               type='text'
               name='username'
               placeholder='User Name...'
               />
     </div>
     
     <div>
       {touched.userPassword && errors.userPassword && <p>{errors.userPassword}</p>}
       < Field className='field'
               type='password'
               name='userPassword'
               placeholder='password...'
               />
     </div>
     <button type='submit'>Submit</button>
   </Form>
  );
};

const Login = withFormik({
  mapPropsToValues({ username, userPassword }) {
    return {
      username: username || "",
      userPassword: userPassword || ""
    };
  },

 validationSchema: Yup.object().shape({
   username: Yup.string()
   .required( 'User Name is Required'),
   userPassword: Yup.string()
   .required('Password is Required')
 }) ,

 handleSubmit(values, {props}) {
   axios.post('http://localhost:5000/api/login', {
     username: values.username,
     password: values.userPassword
   })
   .then(res => {
     localStorage.setItem('token', res.data.payload);
     props.history.push('/celebCard')
   })
 }
})(LoginForm)

export default Login;