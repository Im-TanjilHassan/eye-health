import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import logo from '../../../img/logo/site-logo.png'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <img src={logo} alt='' className="navbar-brand"/>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link fw-bold" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link fw-bold" to="/service">Service</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link fw-bold " to='/about'>About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link fw-bold " to='/team'>Our Team</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link fw-bold " to='/appointment'>Appointment</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link fw-bold " to='/login'>Log-In</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class ="btn btn-outline-dark" type ="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;