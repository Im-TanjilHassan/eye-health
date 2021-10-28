import React, { useEffect, useState } from 'react';
import HServ from './home-service/HServ';
import './HServices.css'

const HServices = () => {
    const [services, setServices] = useState([])

    useEffect( () => {
        fetch('serviceData.json')
        .then(res => res.json())
        .then(data => setServices(data))
    } ,[])


    const filterdServices = services.filter(service => service._id < 5)

    return (
        <div className='h-service'>
            <div className='container'>
                <p className='text-primary fw-bold'>Our Services</p>
                <h1 className='services-title text-primary'>Eye Health Services</h1>
                <div className='row gap-3'>
                        {
                            filterdServices.map(service => <HServ
                            key = {service._id}
                            service = {service}
                            ></HServ>)
                        }
                </div>

            </div>
        </div>
    );
};

export default HServices;