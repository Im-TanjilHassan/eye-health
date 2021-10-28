import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-6 text-white'>
                        <h1 className='banner-title'>We Only Give Best Care To Your Eyes</h1>
                        <p>Our Doctors and machine are the best and most modern quality. And our care is everything you need</p>
                        <Link to='/appointment'>
                            <button className='common-btn'>Get An Appointment</button>
                        </Link>
                        <Link to='/about'>
                            <button className='common-btn'>More ABout Us</button>
                        </Link>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Banner;