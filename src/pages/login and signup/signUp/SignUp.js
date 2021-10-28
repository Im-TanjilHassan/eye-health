import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'

const SignUp = () => {
    return (
        <div className='signUp'>
            <div className='container'>
            <h1 className='text-center about-title text-primary mb-5'>Please Sign-Up</h1>
                <div className='sigup-form mb-5'>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" placeholder='Email Address' id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" placeholder='Password' id="exampleInputPassword1"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Re-Enter Password</label>
                            <input type="password" className="form-control" placeholder='Re-Enter Password' id="exampleInputPassword2"/>
                        </div>

                        <button type="submit" className="btn btn-dark me-3">Sign-up</button>
                        <button type="submit" className="btn btn-dark">Google Sign-up</button>
                    </form>
                </div>
                <p className='text-center'>Already Have An Account? <Link to='/login'>Log-in</Link></p>
            </div>
        </div>
    );
};

export default SignUp;