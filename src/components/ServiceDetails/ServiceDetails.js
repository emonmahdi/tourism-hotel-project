import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {

    const {Id} = useParams(); 

    const [singleDetails, setSingleDetails] = useState([]);
    
    const [getDetails, setGetDetails] = useState({})

    useEffect( () => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setSingleDetails(data))
    }, [])

    useEffect( () => {
      const details = singleDetails.find(td => td.id == Id );
      setGetDetails(details);
    }, [singleDetails])
      

    return (
        <div className='container my-4 pb-5'>
            <div className="row">
                <div className="col-lg-7">
                    <div className="single-details-services text-start">
                        <div className="title">
                            <h2 className='fw-bold mb-4'>{getDetails?.name}</h2> 
                        </div>
                        <div className="single-details-img shadow rounded">
                            <img src={getDetails?.img} className='img-fluid w-100 rounded-3' alt="" />
                        </div> 
                        <p className='my-4'>{getDetails?.description}</p>
                        <span className='text-primary fw-bold'>On Night Charge: {getDetails?.price}</span> 
                    </div>
                </div>
                <div className="col-lg-5">
                <h3 className='mb-3 fw-bold'>Booking Order Information</h3>
                    <div className="form my-3 bg-light p-3">
                        
                        <input className='form-control mb-2' type="text" placeholder='Name' />
                        <input className='form-control mb-2' type="email" placeholder='email' />
                        <input className='form-control mb-2' type="phone" placeholder='Phone' />
                        <textarea className='form-control mb-2' name="" id="" cols="20" rows="5"></textarea>
                        <input type="submit" className='btn btn-warning' value='Book order' />
                    </div>
                </div>
            </div>  
        </div>
    );
};

export default ServiceDetails;