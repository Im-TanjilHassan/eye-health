import React from 'react';
import './NotFound.css'
import image from '../../img/page not found/page-not-found.png'

const NotFound = () => {
    return (
        <div className='not-found'>
            <div className='container'>
                <div className='row'>
                    <div className='img-size'>
                        <img src={image} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;