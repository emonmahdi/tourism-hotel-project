import React, { useEffect, useState } from 'react';

const ManagOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    console.log(allOrders)
    useEffect( () => {
        fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data => setAllOrders(data));
    }, []);
    // ===========================
    const handleDeleteOrder = id => { 
        const procced = window.confirm('Are you sure you want to Remove Order');
        if(procced){
             const url = `http://localhost:5000/order/${id}`;
                 fetch(url, { 
                     method: 'DELETE', 
                 })
                 .then(res => res.json()) 
                 .then(data => {
                     if(data.deletedCount > 0){ 
                         alert('Delete Successfully'); 
                         const remaingOrder = allOrders.filter(order => order?._id !== id);
                         setAllOrders(remaingOrder);
                     }
                 })
              }
     }


    return (
        <div className='my-5 py-5'>
            <h2 className='text-center mb-4 fw-bold text-danger'> This is ALl Order Manage Area {allOrders.length}</h2>

            {
               allOrders.map(sOrder => <div key={sOrder._id}>
                <div className="container ">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div className="single-order bg-secondary text-light rounded shadow p-5 mb-3">
                                <h4>Order Title: {sOrder.getDetails.name} </h4>
                                <h5>User Email: {sOrder.email} </h5>
                                <h6>User Name:  {sOrder.name}</h6>
                                <h6>Order ID: {sOrder.getDetails._id}</h6>
                                <span>Status: {sOrder.status}</span>
                                <h5 className='mt-3'>
                                <button onClick={() => handleDeleteOrder(allOrders?._id)} className='btn btn-warning mt-3'>Remove Order</button>
                                </h5>
                                
                            </div>
                        </div>
                    </div>
                </div>

               </div>) 
            }
            
        </div>
    );
};

export default ManagOrders;