import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setservices] = useState([]);
    useEffect( ()=>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setservices(data));
    }, [])
    return (
        <div id='services' className='container'>
            <h1 className='services-title'>Services For You</h1>
            <div className='services-container'>
            {
                services.map(service => <Service 
                    key={service._id}
                    service={service}
                    ></Service>)
            }
            </div>

        </div>
    );
};

export default Services;