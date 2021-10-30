import React from 'react';
import './LatestNews.css'


const LatestNews = () => {
    return (
        <div className='latest-news'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <h2 className='text-danger my-3 fw-bold'>Latest News</h2>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="single-news">
                                    <img src="https://i.ibb.co/6HTNDHZ/l-news-1.jpg" className='img-fluid' alt="" />
                                    <h3>A Night Resort With in Family</h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa nt ium dolor emque</p>
                                    <a  href="#">Read More</a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="single-news">
                                    <img src="https://i.ibb.co/N3jcNJW/l-news-2.jpg" className='img-fluid' alt="" />
                                    <h3>A Night Resort With in Friends</h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa nt ium dolor emque</p>
                                    <a  href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <h2 className='text-danger my-3 fw-bold'>Upcomming Events </h2>
                        <div className="events ">
                            <div className="single-event text-center bg-info p-2">
                                <h2>4 Nov</h2>
                                <h3>Aniverseri Our Hotel</h3>
                            </div>
                            <div className="single-event text-center bg-light p-2">
                                <h2 className=''>6 Nov</h2>
                                <h3 >Special Offers Our Hotel</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestNews;