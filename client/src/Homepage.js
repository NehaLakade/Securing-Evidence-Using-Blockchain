import React from 'react';
import Navbar from './Navbar';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Homepage.css'; 

const Homepage = () => {
    return (
        <div className="homepage">
            <div className="content">
                <h1 className="welcome">Welcome to <span className="highlight">Securing Evidence Using Blockchain</span></h1>
                <p className="system-description">
                    Our system is designed to securely store and manage evidence using blockchain technology.
                    It ensures tamper-proof storage and provides a transparent and auditable record of evidence chain of custody.
                </p>
                <div className="slideshow">
                    
                </div>
            </div>
            <footer className="footer">
                <div className="container">
                    <p>&copy; 2024 Securing Evidence Using Blockchain. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Homepage;
