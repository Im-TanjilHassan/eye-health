import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='login'>
            <div className='container'>
                <h1 className='text-center about-title text-primary mb-5'>Please Log-In</h1>
                <div className='Login-form mb-5'>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" placeholder='Email Address' id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" placeholder='Password' id="exampleInputPassword1" />
                        </div>
                        <button type="submit" className="btn btn-dark me-3">Log-In</button>
                        <button type="submit" className="btn btn-dark">Google Log-in</button>
                    </form>
                </div>
                <p className='text-center'>New User? <Link to='/signup'>Create Account</Link></p>
                
            </div>
        </div>
    );
};

export default Login;