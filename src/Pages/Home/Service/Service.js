
import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {name, picture, description, price} = service;
    return (
        <div className='service'>
            <img src={picture} alt=""/>
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
        </div>
    );
};

export default Service;




