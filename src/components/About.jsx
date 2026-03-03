import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about">
            <div className="container about-container">
                <div className="about-image">
                    <div className="image-wrapper glass-card">
                        <img
                            src="https://res.cloudinary.com/dpu9ikeqe/image/upload/v1772541337/WhatsApp_Image_2026-02-25_at_12.44.58_PM_2_ihlbwt.jpg"
                            alt="TONI&GUY Essensuals Hope College - Our Salon"
                        />

                    </div>
                </div>
                <div className="about-content">
                    <p className="about-label">Style. Dine In. Joy.</p>
                    <h2 className="section-title">
                        A New Landmark <br />
                        <span className="highlight-text">At Hope College</span>
                    </h2>
                    <p>
                        Experience the perfect blend of luxury grooming and delightful dining. Step into <span className="brand-bold text-white">TONI&GUY</span>,
                        located right at the <span className="highlight-text" style={{ fontSize: '1em' }}>Clusters Connect Food Court</span> on Kamarajar Road.
                        We bring a globally celebrated brand to the heart of Coimbatore, offering a seamless "Style and Dine In" experience.
                    </p>
                    <p>
                        Pamper yourself with premium hair and skin services from our internationally trained stylists,
                        then step out to enjoy the vibrant food court right next door. Whether it's precision cuts, bold colours,
                        or relaxing treatments, we make every visit a joy.
                    </p>
                    <div className="about-highlights">
                        <div className="highlight-item">
                            <span className="highlight-icon">✦</span>
                            <span>Located at Clusters Connect Food Court</span>
                        </div>
                        <div className="highlight-item">
                            <span className="highlight-icon">✦</span>
                            <span>Trained & Certified Stylists</span>
                        </div>
                        <div className="highlight-item">
                            <span className="highlight-icon">✦</span>
                            <span>Premium Products Only</span>
                        </div>
                        <div className="highlight-item">
                            <span className="highlight-icon">✦</span>
                            <span>The Perfect "Style & Dine" Day Out</span>
                        </div>
                    </div>
                    <div className="stats-grid">
                        <div className="stat glass">
                            <h4>15+</h4>
                            <p>Expert Stylists</p>
                        </div>
                        <div className="stat glass">
                            <h4>100+</h4>
                            <p>Premium Services</p>
                        </div>
                        <div className="stat glass">
                            <h4>5★</h4>
                            <p>Rated Salon</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
