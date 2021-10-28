import React, { useEffect, useState } from 'react';
import './ServiceDetail.css'
import { useParams } from 'react-router';

const ServiceDetail = () => {

    const { serviceId } = useParams()

    console.log(serviceId)

    const [serviceData, setServiceData] = useState([])
    const [detailData, setDetailData] = useState([])

    useEffect(() => {
        fetch('/serviceData.json')
            .then(res => res.json())
            .then(data => setServiceData(data))
    }, [])

    console.log(serviceData)

    useEffect(() => {
        if (serviceData.length > 0) {
            const matchedData = serviceData.find(data => data._id === serviceId)
            setDetailData(matchedData)
        }

    }, [serviceData, serviceId])

    const { picture, title, description, specialitst } = detailData

    return (
        <div className='detail'>
            <div className='container'>
                <div className='row'>
                    <h1 className='about-title text-primary'> {title}</h1>
                    <p className='text-primary fw-bold mb-5'>Specialist: {specialitst}</p>
                    <div className='row'>
                        <div className='service-image col-lg-6 col-sm-12'>
                            <img src={picture} className='img-fluid' alt="" />
                        </div>
                        <div className='col-lg-6 col-sm-12'>
                            <p className='fw-bold'>Description:</p>
                            <p>{description}</p>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default ServiceDetail;