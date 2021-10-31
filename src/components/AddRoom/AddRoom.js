import React from 'react';
import { useForm } from 'react-hook-form';

const AddRoom = () => {
        const { register, handleSubmit, reset, formState: { errors } } = useForm();
        const axios = require('axios');
       const onSubmit = data => {
           
        axios.post('https://radiant-ocean-16020.herokuapp.com/rooms', data)
            .then(res => {
                if(res.data.insertedId){
                    alert('Added Successfully');
                    reset();
                }
            }) 

        //    fetch(`https://radiant-ocean-16020.herokuapp.com/addRoom`, {
        //        method: 'POST',
        //        headers: {
        //            'content-type' : 'application/json'
        //        },
        //        body:JSON.stringify(data)
        //    })
        //    .then(res => res.json())
        //    .then(result => {
        //        console.log(result)
        //     })
        //    console.log(data)
        };
    return (
        <div className='container'>
            <h3 className='text-center fw-bold my-4'>Add Rooms Informations</h3>
            <div className="row"> 
                <div className="col-lg-6 text-center">
                    <form onSubmit={handleSubmit(onSubmit) } className='p-3 border'> 
                        <input type='text' className='form-control mb-2'   {...register("name")} placeholder='Add Title' />
                          

                        <input type='text' className='form-control mb-2' {...register("description", { required: true })} placeholder='description' /> 

                        <input   className='form-control mb-2' {...register("img", { required: true })} placeholder='image link' />

                        <input type='number' className='form-control mb-2' {...register("price", { required: true })} placeholder='Price' /> 

                        {errors.exampleRequired && <span>This field is required</span>}
                        
                        <input className='btn btn-danger' type="submit" />
                    </form>
                </div>
            </div>
           
        </div>
    );
};

export default AddRoom;