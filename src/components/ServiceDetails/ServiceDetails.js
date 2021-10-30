import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../hooks/useAuth';

const ServiceDetails = () => { 

    const {Id} = useParams(); 
    const {user} = useAuth();
    console.log(user);

    const [singleDetails, setSingleDetails] = useState([]);
    
    const [getDetails, setGetDetails] = useState({})

    useEffect( () => {
        fetch('https://radiant-ocean-16020.herokuapp.com/rooms') 
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
                        
                        <input className='form-control mb-2' type="text" placeholder='Name' value={user.displayName} />
                        <input className='form-control mb-2' type="email" placeholder='email' value={user.email}  />
                        <input className='form-control mb-2' type="text" placeholder='email' value={getDetails?.name}  />
                        <input className='form-control mb-2' type="adress" placeholder='Address' /> 
                        <input className='form-control mb-2' type="phone" placeholder='Phone' />  
                        <input type="submit" className='btn btn-warning' value='Book order' />
 
                        
                    </div>
                </div>
            </div>  
        </div>
    );
};

export default ServiceDetails;