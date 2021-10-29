import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
// import useFirebase from '../../../hooks/useFirebase';
import './SignUp.css'

const SignUp = () => {

    const {error ,emailPassAuth, googleSignUp, setError} = useAuth()

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

    // email And Password authentication
    // sign Up
    const emailSignUp = (e) => {
        e.preventDefault()
        if(!/^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.{5,20}$)/.test(password)){
            setError('password must have at leas 6 character and one Uppercase and Lowercase and a digit')
            return
        }
        emailPassAuth(email, password)
    }

    // google sighn up
    const googleRegister = () => {
        googleSignUp()
    }



    return (
        <div className='signUp'>
            <div className='container'>
            <h1 className='text-center about-title text-primary mb-5'>Please Sign-Up</h1>
                <div className='sigup-form mb-5'>
                    <form onSubmit={emailSignUp}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" onBlur={getEmail} className="form-control" placeholder='Email Address' id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" onBlur={getPassword} className="form-control" placeholder='Password' id="exampleInputPassword1"/>
                        </div>
                        <div>
                            <p className='text-danger fw-bold'>{error}</p>
                        </div>
                        <button type="submit" className="btn btn-dark me-3">Sign-up</button>
                        <button type="submit" onClick={googleRegister} className="btn btn-dark">Google Sign-up</button>
                    </form>
                </div>
                <p className='text-center'>Already Have An Account? <Link to='/login'>Log-in</Link></p>
            </div>
        </div>
    );
};

export default SignUp;