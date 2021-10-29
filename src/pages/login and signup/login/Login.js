import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css'

const Login = () => {

    const {login, error, googleLogin, setError, setLoading} = useAuth()

    const history = useHistory()
    const location = useLocation()
    const redirect_uri = location.state?.from || '/home'

    // get email
    const [email, setEmail] = useState()
    const getEmail =(e) => {
        setEmail(e.target.value)
    }

    // get password
    const [password, setPassword] = useState()
    const getPassword = e => {
        setPassword(e.target.value)
    }

    const logIn = (e) => {
        e.preventDefault()
        if(!/^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.{5,20}$)/.test(password)){
            setError('password must have at leas 6 character and one Uppercase and Lowercase and a digit')
            return
        }
        login(email, password)
        .then(result => {
            history.push(redirect_uri)
        })
        .finally(() => setLoading(false))
        .catch(error => {
            setError(error.message)
        })
        
    }

    // google sign in
    const googleSignIn = () => {
        googleLogin()
        .then(result => {
            history.push(redirect_uri)
        })
        .finally(() => setLoading(false))
    }

    return (
        <div className='login'>
            <div className='container'>
                <h1 className='text-center about-title text-primary mb-5'>Please Log-In</h1>
                <div className='Login-form mb-5'>
                    <form onSubmit={logIn}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" onBlur={getEmail} className="form-control" placeholder='Email Address' id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" onBlur={getPassword} className="form-control" placeholder='Password' id="exampleInputPassword1" />
                        </div>
                        <div>
                            <p className='text-danger fw-bold'>{error}</p>
                        </div>
                        <button type="submit" className="btn btn-dark me-3">Log-In</button>
                        <button type="submit" onClick={googleSignIn} className="btn btn-dark">Google Log-in</button>
                    </form>
                </div>
                <p className='text-center'>New User? <Link to='/signup'>Create Account</Link></p>                
            </div>
        </div>
    );
};

export default Login;