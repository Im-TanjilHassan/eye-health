import React from 'react';
import './Appointment.css'

const Appointment = () => {

    const handleSubmit = e => {
        e.preventDefault()
    } 

    return (
        <div className='appointment'>
            <div className='container'>
                <div className='row'>
                    <h1 className='about-title text-light pt-5 text-center'>Book Appointment</h1>
                    <div>
                        <form className='bg-light p-5' onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Name</label>
                                <input type="text" className="form-control" placeholder='Your Name' id="exampleInputEmail0" aria-describedby="emailHelp"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" placeholder='Email Address' id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword2" className="form-label">Phone Number</label>
                                <input type="text" className="form-control" placeholder='Phone Number' id="exampleInputPassword2"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword4" className="form-label">Appointment Date</label>
                                <input type="text" className="form-control" placeholder='Appointment Date' id="exampleInputPassword4"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword5" className="form-label">Leave A Message</label>
                                <input type="text" className="form-control" placeholder='Message' id="exampleInputPassword5"/>
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-dark">Submit</button>
                        </form>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Appointment;