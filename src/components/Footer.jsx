import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h2 className="brand-bold">TONI&GUY</h2>
                        <p className="brand-sub">HOPE COLLEGE</p>
                        <p className="footer-desc">
                            Experience the best of both worlds. The global expertise of TONI&GUY combined with the artistic flair of Artysto, now at Hope College, Coimbatore.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-icon" aria-label="Instagram"><FaInstagram size={20} /></a>
                            <a href="#" className="social-icon" aria-label="Facebook"><FaFacebook size={20} /></a>
                            <a href="https://wa.me/919843646666?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="WhatsApp"><FaWhatsapp size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#services">Our Services</a></li>
                            <li><a href="#contact">Book Appointment</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                        </ul>
                    </div>

                    <div className="footer-services">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="#services">Hair Styling</a></li>
                            <li><a href="#services">Skin Care</a></li>
                            <li><a href="#services">Bridal Makeup</a></li>
                            <li><a href="#services">Premium Spa</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} TONI&GUY Hope College. All Rights Reserved.</p>
                    <p>Powered by Advanced Artistry.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
