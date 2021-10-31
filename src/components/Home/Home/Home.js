import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import LatestNews from '../LatestNews/LatestNews';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';
import About from './About/About';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <About></About>
            <LatestNews></LatestNews>
            
        </div>
    );
};

export default Home;