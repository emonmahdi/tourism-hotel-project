import React from 'react';
import './About.css'


const About = () => {
    return (
        <div className='about-us'>
            <div className="container">
                <h2 className='text-danger fw-bold text-center mb-5'>Why Choos Our Hotel</h2>
                <div className="row py-4 about-body">
                    <div className="col-lg-6">
                        <ul>
                            <li>Wellness And Poll</li>
                            <li>Free Wifi</li>
                            <li>Bar &amp; garden with terrace</li>
                            <li>Delicious breakfast</li>
                            <li>HIgh customer satisfaction</li>
                            <li>Good parking  AND security</li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <img className='img-fluid' src="https://i.ibb.co/8Xz6qxZ/resot-1.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;