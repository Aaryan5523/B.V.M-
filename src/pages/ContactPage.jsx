import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import './Contact.css';

const ContactPage = () => {
    return (
        <div className="contact-page">
            <section className="contact-hero">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="about-subtitle" style={{ color: 'var(--primary)' }}>Connect With Us</span>
                        <h1 className="contact-title">Let's Power Your Future</h1>
                    </motion.div>
                </div>
            </section>

            <section className="contact-container">
                <div className="container">
                    <div className="contact-grid-main">
                        <motion.div
                            className="contact-info-panel"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="form-header-premium">
                                <h2>Get in Touch</h2>
                                <p>We're here to help you transition to clean, sustainable energy. Reach out for any inquiries or a free consultation.</p>
                            </div>

                            <div className="contact-info-list">
                                <InfoCard
                                    icon={<MapPin size={28} />}
                                    title="Our Location"
                                    content="Shop No.103, Akhilam Corner, Nr.Samarpan Circle, Opp.Kashi Inn Hotel, Jamnagar - 361006. clean energy hub, Green Valley, Solar City, 361001"
                                />
                                <InfoCard
                                    icon={<Phone size={28} />}
                                    title="Phone Number"
                                    content="+91 81090 09954 (Main Office)"
                                />
                                <InfoCard
                                    icon={<Mail size={28} />}
                                    title="Email Address"
                                    content="info@bvminfra.com"
                                />
                                <InfoCard
                                    icon={<Clock size={28} />}
                                    title="Working Hours"
                                    content="Mon - Sat: 9:00 AM - 7:00 PM"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            className="contact-form-premium"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="form-header-premium">
                                <h2>Send a Message</h2>
                                <p>Fill out the form below and our solar experts will get back to you within 24 hours.</p>
                            </div>

                            <form onSubmit={(e) => e.preventDefault()}>
                                <div className="contact-form-row">
                                    <div className="premium-input-group">
                                        <label>Full Name</label>
                                        <input type="text" placeholder="Enter your name" required />
                                    </div>
                                    <div className="premium-input-group">
                                        <label>Email Address</label>
                                        <input type="email" placeholder="Enter your email" required />
                                    </div>
                                </div>

                                <div className="contact-form-row">
                                    <div className="premium-input-group">
                                        <label>Phone Number</label>
                                        <input type="tel" placeholder="Enter your phone number" required />
                                    </div>
                                    <div className="premium-input-group">
                                        <label>Inquiry Type</label>
                                        <input type="text" placeholder="Enter your inquiry type" required />
                                    </div>
                                </div>

                                <div className="premium-input-group">
                                    <label>Your Message</label>
                                    <textarea placeholder="Tell us about your requirements..." rows="6" required></textarea>
                                </div>

                                <motion.button
                                    type="submit"
                                    className="submit-btn-premium"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span>Send Message</span>
                                    <Send size={20} />
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const InfoCard = ({ icon, title, content }) => (
    <div className="info-card-premium">
        <div className="info-icon-wrapper">
            {icon}
        </div>
        <div className="info-content">
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    </div>
);

export default ContactPage;
