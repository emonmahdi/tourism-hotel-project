import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth'; 

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <> 
        <Navbar bg="success" variant="dark" sticky="top" collapseOnSelect expand="lg">
            <Container>
            <Navbar.Brand to="#home"> <span className='text-dark'>
                </span> Hotel <span className='fw-bold text-dark'>Grand Park</span> </Navbar.Brand>
            
            <Navbar.Toggle /> 
            
            <Navbar.Collapse className="justify-content-end">
                <Nav className="">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                    <Nav.Link to="/about">About Us</Nav.Link>
                    <Nav.Link as={Link}  to="/room">Add Rooms</Nav.Link>
                    <Nav.Link as={Link}  to="/myorder">My Orders</Nav.Link>
                    <Nav.Link to="/home#contact">Contact</Nav.Link>
                   
                    {/* <Button variant='light'>Logout</Button> */}
                    {user?.email?
                     
                    <Button onClick={logOut} variant='light'>Logout</Button> 
                    : 
                    <Nav.Link as={Link} to="/login" className='btn btn-dark text-light'>Login</Nav.Link>}
 

 
                </Nav>
                <Navbar.Text>
                    
                    Signed in as:
                     <a href="#login" className='text-dark bg-light fw-bold '>
                         {user.displayName}
                    </a>
                </Navbar.Text>
                
            </Navbar.Collapse>
            
            </Container>
        </Navbar> 
        
        </>
    );
};

export default Header;