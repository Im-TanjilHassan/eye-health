import React from 'react';
import './HServ.css'

const HServ = ({ service }) => {

    const { picture, title, description } = service

    return (
        <div className='col-lg-6 col-sm-12 full-card'>
                <div className='car-img'>
                    <img className='img-fluid' src={picture} alt="" />
                </div>
                <div className='card-detail'>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <button className='common-btn'>See Details</button>
                </div>
        </div>
    );
};

export default HServ;