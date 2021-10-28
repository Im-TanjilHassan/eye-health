import React from 'react';
import './Serv.css'

const Serv = ({data}) => {

    const {picture, title, description} = data;

    return (
        <div className='col-lg-4 col-sm-12 full-card mb-3'>
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

export default Serv;