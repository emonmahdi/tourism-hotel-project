import React, { useEffect } from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = ({service}) => {

    useEffect( () => {
        fetch(`https://radiant-ocean-16020.herokuapp.com/rooms`)
            .then(res => res.json())
            .then(data => console.log(data))
    },[])

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
                        <button className='btn service-btn ms-3' >Booking</button>
                    </Link> 
                </div>
            </div>
    );
};

export default Service;