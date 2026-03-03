import React from 'react';
import './Contact.css';

const WHATSAPP_URL = "https://wa.me/919843646666?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment";
const MAPS_DIRECTIONS = "https://www.google.com/maps/search/?api=1&query=Toni+Guy+hairdressing+Hope+College,+No.439+Cluster+Connect,+Kamarajar+Rd,+near+Erodu+Amman+mess,+Chitra+Nagar,+Hope+College,+Coimbatore,+Tamil+Nadu+641004";
const MAPS_EMBED = "https://maps.google.com/maps?q=Toni+Guy+hairdressing+Hope+College+No.439+Cluster+Connect+Kamarajar+Rd+near+Erodu+Amman+mess+Chitra+Nagar+Hope+College+Coimbatore+Tamil+Nadu+641004&output=embed&z=17";

const Contact = () => {
    return (
        <section id="contact" className="section contact">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Visit Us</h2>
                    <p className="section-split">Book your appointment and step into elegance.</p>
                </div>

                <div className="contact-grid">
                    {/* Info Card */}
                    <div className="contact-info glass-card">
                        <div className="info-item">
                            <div className="icon">📍</div>
                            <div>
                                <h3>Location</h3>
                                <p>No.439, Cluster Connect, Kamarajar Rd,</p>
                                <p>near Erodu Amman Mess, Chitra Nagar,</p>
                                <p>Hope College, Coimbatore - 641004</p>
                                <p className="sub-text">Landmark: Near Erodu Amman Mess</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="icon">📞</div>
                            <div>
                                <h3>Phone</h3>
                                <p><a href="tel:+919843646666">+91 9843646666</a></p>
                                <p className="sub-text">Call to Book Appointment</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="icon">✉️</div>
                            <div>
                                <h3>Email</h3>
                                <p><a href="mailto:tnghopecollege@gmail.com">tnghopecollege@gmail.com</a></p>
                                <p className="sub-text">For inquiries and special bookings</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="icon">⏰</div>
                            <div>
                                <h3>Working Hours</h3>
                                <p>Mon - Sun: 08:00 AM - 10:00 PM</p>
                                <p className="sub-text">Open All Days</p>
                            </div>
                        </div>

                        {/* WhatsApp Book Now */}
                        <a href={WHATSAPP_URL} className="contact-whatsapp-btn" target="_blank" rel="noopener noreferrer">
                            <svg className="contact-wa-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Book Now on WhatsApp
                        </a>
                    </div>

                    {/* Real Google Map */}
                    <div className="contact-map glass-card">
                        <iframe
                            title="TONI&GUY Hope College Location"
                            src={MAPS_EMBED}
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: '380px' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <a
                            href={MAPS_DIRECTIONS}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="get-directions-btn"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                                <path d="M21.71 11.29l-9-9a1 1 0 00-1.42 0l-9 9a1 1 0 000 1.42l9 9a1 1 0 001.42 0l9-9a1 1 0 000-1.42zM14 14.5V12h-4v3H8v-4a1 1 0 011-1h5V7.5l3.5 3.5-3.5 3.5z" />
                            </svg>
                            Get Directions
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
