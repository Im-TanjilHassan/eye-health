import React from 'react';
import { Link } from 'react-router-dom';

const Serv = ({data}) => {   

    const {picture, title, description, _id} = data;

    return (
        <div className='col-lg-4 col-sm-12 full-card mb-3'>
                <div className='car-img'>
                    <img className='img-fluid' src={picture} alt="" />
                </div>
                <div className='card-detail'>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <Link to={`/serviceDetail/${_id}`}>
                    <button className='common-btn'>See Details</button>
                    </Link>
                </div>
        </div>
    );
};

export default Serv;