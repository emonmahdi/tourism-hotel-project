import React, {useEffect, useState} from 'react'; 
import useAuth from '../hooks/useAuth'; 


const MyOrder = () => { 
    const { user } = useAuth();
    console.log(user?.email);
    const [orders, setOrders] = useState([]); 
    console.log(orders);
    const emai = user?.email 
    useEffect( () => {
        fetch(`http://localhost:5000/order/${emai}`)
            .then(res => res?.json())
            .then(data => setOrders(data));
    }, [])
    return (
        <div>
            <h2 className='text-center my-3 fw-bold text-danger'>My Orders Items:{orders?.length}</h2> 
            {
                orders.map(order => <div key={order?._id}>
                    <div className="container">
                        <div className="row">
                        
                            <div className="col-lg-8 p-3 mx-auto mb-4 shadow bg-light ">
                                <h3 className='text-primary'>{order?.getDetails?.name}</h3>
                                <h5 className='my-3'>Id: {order?.getDetails?._id}</h5>
                                <h6>Price : <span className='text-danger  fw-bold'>${order?.getDetails?.price}</span></h6>
                                <button className='btn btn-warning mt-3'>Remove Order</button>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default MyOrder;