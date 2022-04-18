
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const { id, name, picture, description, price} = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id =>{
        navigate(`/service/${id}`);
    }
    return (
        <div className='service'>
            <img src={picture} alt=""/>
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToServiceDetail(id)} className='btn btn-primary'>Checkout</button>
        </div>
    );
};

export default Service;




