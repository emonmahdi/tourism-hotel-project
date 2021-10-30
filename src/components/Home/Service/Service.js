import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    
        const {id, name, img, description, price} =  service;
        return (
            <div className='col-lg-6 col-md-6 col-sm-6'>
                <div className="single-service bg-light pb-3 ">
                    <img src={img} className='img-fluid' alt="" />
                    <div className="content text-start p-3 mt-3"> 
                        <h5 className='title'>{name}</h5>
                        <p>{description}</p>
                        <h6> ${price} / <span className='text-info'>Night </span></h6>
                    </div>
                    <Link  to={`/service/${id}`}>
                        <button className='btn service-btn'>Purches</button>
                    </Link> 
                </div>
            </div>
    );
};

export default Service;