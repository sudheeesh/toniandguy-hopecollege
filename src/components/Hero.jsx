import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <header className="hero">
            <iframe src="https://drive.google.com/file/d/11HvfOQyZ94PSX96wbQ82lkqwq7jVpJE3/view?usp=drive_link" width="100%" height="100%" allow="autoplay" className="hero-video"></iframe>
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
