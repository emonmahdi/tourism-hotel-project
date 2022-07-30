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
                    src='https://i.ibb.co/pfkjhy8/pexels-photo-1457845.jpg'
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h6>For Your Journey</h6>
                    <h1>Trusted Help from Our Family to Yours</h1>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <button className='btn btn-warning'>Learn More</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src='https://i.ibb.co/w0c2qnR/pexels-photo-2869215.jpg'
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h6>For Your Family</h6>
                    <h1>Living Assistance Service</h1>
                    <p>You can visit our hotel of all your family members</p>
                    <button className='btn btn-warning'>Learn More</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src='https://i.ibb.co/smZWXFj/pexels-photo-6284232.jpg'
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h6>For Your Tour</h6>
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