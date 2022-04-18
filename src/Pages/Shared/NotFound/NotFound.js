import React from 'react';
import error from '../../../image/erroe.jpg';
import './NotFound.css'


const NotFound = () => {
    return (
        <div  className='error container'>
          <h2>Not Working</h2> 
          <img src={error} alt="" /> 
        </div>
    );
};

export default NotFound;