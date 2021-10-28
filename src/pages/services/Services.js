import React, { useEffect, useState } from 'react';
import './Services'
import Serv from './single-service/Serv';


const Services = () => {
    const [datas, setData] = useState([])

    useEffect( ()=> {
        fetch('serviceData.json')
        .then(res => res.json())
        .then(data => setData(data))
    } ,[])
    return (
        <div className='services'>
            <div className='container'>
                <div className='row text-center'>
                    <h1>Our Services</h1>
                    <p className='mb-5'>We provide the best services ever</p>
                    <div className='row'>
                        {
                            datas.map(data => <Serv
                            key={data._id}
                            data= {data}
                            ></Serv>)
                        }

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Services;