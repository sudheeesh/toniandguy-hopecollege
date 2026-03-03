import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <header className="hero">
            {/* Background Video */}
            <video autoPlay loop muted playsInline className="hero-video">
                <source
                    src="https://res.cloudinary.com/dpu9ikeqe/video/upload/v1772557043/C0499_a0ylvf.mp4"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
            <div className="hero-overlay"></div>
            <div className="container hero-content animate-fade-in">
                <h1 className="hero-title">
                    <span className="split-text">ELEVATE</span>
                    <br />
                    YOUR <span className="highlight-text">STYLE</span>
                </h1>
                <p className="hero-subtitle">
                </p>
                <div className="hero-actions">
                    <a href="#services" className="btn btn-primary">Discover Services</a>
                    <a href="#contact" className="btn btn-outline">Book Appointment</a>
                </div>
            </div>
        </header>
    );
};

export default Hero;
