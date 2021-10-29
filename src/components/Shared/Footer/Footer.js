import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <div>
            <>
            <div id='footer-section'> 
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 text-start single-row">
                        <h2> Happy Stay <span className='text-info'>Hotel Grand Park</span> </h2>
                        <div className="social-link">
                            <a href="#"> <i className='fab fa-facebook-f'></i> </a>
                            <a href="#"> <i className='fab fa-twitter'></i> </a>
                            <a href="#"> <i className='fab fa-instagram'></i> </a>
                            <a href="#"> <i className='fab fa-linkedin'></i> </a>
                        </div>
                    </div>
                    <div className="col-lg-5 single-row">
                        <h5>UseFull Links</h5>
                        <div className="links">
                            <a href="#">Services</a>
                            <a href="#">About Us</a>
                            <a href="#">Our Team Member</a>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <h3>Email</h3>
                        <input className='form-control mb-2' type="email" placeholder='enter your email' />
                        <input className='btn btn-primary' type="submit" value='Send' />

                    </div>
                </div> 
            </div>  
        </div>
        <div className="copyright text-center text-light py-2 bg-secondary">
                <p>2021 &copy; All Right Reserved <span className='text-warning'>Hotel Grand Park</span> </p>
        </div>
        
        </>
        </div>
    );
};

export default Footer;