import React from 'react';
import './TopAbout.css'
import aboutImage from '../../../img/home page img/habout-img.jpg'


const TopAbout = () => {
    return (
        <div className='top-about'>
            <div className='container'>
                <div className='row'>
                    <h1 className='text-center mb-5 about-title text-primary'>About us</h1>
                    <div className='row gap-5'>
                        <div className='col-lg-6 col-sm-12 about-img'>
                            <img className='img-fluid' src={aboutImage} alt="" />
                        </div>
                        <div className='col-lg-6 col-sm-12'>
                            <h2 className='about-title'>We Are Caring For Your Eye Health Hospital</h2>
                            <p>Eye Health Hospital has provided comprehensive ophthalmology care for patients since 1832. Our skilled physicians and staff are dedicated to improving  and preserving sight locally, regionally, and globally, and treat more than 350,000 patients a year.</p>
                            <ul className='row'>
                                <div className='col-6'>
                                    <li>
                                        <p>Conducts eye health checkup</p>
                                    </li>
                                    <li>
                                        <p>Best lasik treatment</p>
                                    </li>
                                    <li>
                                        <p>Treats minor illnesses</p>
                                    </li>
                                </div>
                                <div className='col-6'>
                                    <li>
                                        <p>Special eye exam</p>
                                    </li>
                                    <li>
                                        <p>Contact lens service</p>
                                    </li>
                                    <li>
                                        <p>Special Retina exam</p>
                                    </li>
                                </div>
                            </ul>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default TopAbout;