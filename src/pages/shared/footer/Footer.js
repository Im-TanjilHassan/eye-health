import React from 'react';
import './Footer.css'
import logoimg from '../../../img/logo/site-logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='row'>
                    <div>
                        <Link to='/home'>
                            <img className='footer-img' src={logoimg} alt="" />
                        </Link>
                        <div className='row text-white gap-3'>
                            <div className='col-lg-4 col-sm-12'>
                                <h3>Contact</h3>
                                <p>Phone: 882-153-648</p>
                                <p>Email: hello@eyehealth.gmail</p>
                                <p>Address: 123,Western Road, Badda Dhaka-1212</p>
                            </div>
                            <div className='col-lg-4 col-sm-12'>
                                <h3>Supports</h3>
                                <p>Online Support</p>
                                <p>Free Consultency</p>
                                <p>24/7 service</p>
                            </div>
                            <div className='col-lg-4 col-sm-12'>
                                <h3>Opening Hour</h3>
                                <p>Sun: 09:00 AM - 09:00 PM</p>
                                <p>Mon: 09:00 AM - 09:00 PM</p>
                                <p>Tue: 09:00 AM - 09:00 PM</p>
                                <p>Wed: 09:00 AM - 09:00 PM</p>
                                <p>Thu: 09:00 AM - 09:00 PM</p>
                            </div>
                            <div></div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <p>Copyright ©2021 Eye Health. Designed By Tanjil Hassan</p>
            </div>
        </div>
    );
};

export default Footer;