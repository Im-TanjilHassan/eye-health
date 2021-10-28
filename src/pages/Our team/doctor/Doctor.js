import React from 'react';
import { Link } from 'react-router-dom';
import './Doctor.css'

const Doctor = ({ doctor }) => {


    const { picture, age, name, email, phone } = doctor

    return (
        <div className='col-lg-4 col-sm-12 mb-5'>
            <div className="card doc-card" style={{ width: "18rem" }}>
                <img src={picture} className="card-img-top doc-img" alt="..." />

                <div className="card-body p-3">
                    <h5 className="card-title text-primary">{name}</h5>
                    <h5 className="card-text">Age: {age}</h5>
                    <h5 className="card-text">Email: {email}</h5>
                    <h5 className="card-text mb-3">Phone: {phone}</h5>
                    <Link to='/appointment'>
                    <button className='common-btn'>Get An Appointment</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Doctor;