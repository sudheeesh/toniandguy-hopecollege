import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <header className="hero">
            {/* Google Drive video using direct API view URL so it autoplays properly in the background */}
            <video autoPlay loop muted playsInline className="hero-video">
                <source
                    src="https://drive.google.com/uc?export=view&id=11HvfOQyZ94PSX96wbQ82lkqwq7jVpJE3"
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
