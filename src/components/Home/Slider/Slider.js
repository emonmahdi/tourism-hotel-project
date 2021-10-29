import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css';
import slider1 from './img/s1.jpeg'
import slider2 from './img/s2.jpeg'
import slider3 from './img/s3.jpeg'
const Slider = () => {
    return (
        <div>
             <>
             <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={slider1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h6>For Your Company</h6>
                    <h1>Trusted Help from Our Family to Yours</h1>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <button className='btn btn-warning'>Learn More</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={slider2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h6>For Your Home</h6>
                    <h1>Living Assistance Service</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <button className='btn btn-warning'>Learn More</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={slider3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h6>For Your Safe</h6>
                    <h1>Quality Home Care for Seniors</h1>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    <button className='btn btn-warning'>Learn More</button>
                    </Carousel.Caption>
                </Carousel.Item>
             </Carousel>  
        </>
        </div>
    );
};

export default Slider;