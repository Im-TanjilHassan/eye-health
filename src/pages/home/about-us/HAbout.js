import React from 'react';
import './HAbout.css'
import aboutImg from '../../../img/home page img/habout-img.jpg'

const HAbout = () => {
    return (
        <div className='h-about'>
            <h1 className='text-center text-primary mb-5'>About Us</h1>
            <div className='container'>
                <div className='row gap-lg-5 gap-sm-0'>
                    <div className='h-about-img col-lg-6 col-sm-12'>
                        <img className='img-fluid' src={aboutImg} alt="" />
                    </div>
                    <div className='col-lg-6 col-sm-12'>
                        <h1 className='about-title'>We Are Caring For Your Eye Health Hospital</h1>
                        <p>Eye Health Hospital has provided comprehensive ophthalmology care for patients since 1832. Our skilled physicians and staff are dedicated to improving and preserving sight locally, regionally, and globally, and treat more than 350,000 patients a year.

                            Eye Health has ranked consistently among the best ophthalmology hospitals in the U.S. Our team comprises some of the world's top eye doctors and has more top eye surgeons than any hospital in the United States.</p>
                        <button className='common-btn'>Get An Appointment</button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default HAbout;