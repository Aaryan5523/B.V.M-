import React from 'react';
import { Mail, Phone, MapPin, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <motion.div
                        className="footer-brand"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            className="logo footer-logo"
                            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, color: 'white' }}
                            whileHover={{ scale: 1.05, filter: "drop-shadow(0 0 8px var(--primary))" }}
                        >
                            <motion.div
                                animate={{ rotate: [0, 5, -5, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            >
                                <Sun color="var(--primary)" fill="var(--primary)" size={32} />
                            </motion.div>
                            <span>B.V.M Infrastructure</span>
                        </motion.div>
                        <p className="footer-description">
                            Providing sustainable energy solutions for a brighter, cleaner future.
                            B.V.M Infrastructure represents a legacy of excellence and trust in renewable energy since 2015.
                        </p>
                    </motion.div>

                    <div className="footer-links">
                        <h4 className="footer-title">COMPANY</h4>
                        <ul>
                            {['Home', 'Shop', 'About', 'Contact'].map((item) => (
                                <motion.li key={item} whileHover={{ x: 10 }}>
                                    <motion.a
                                        href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                        whileHover={{ color: 'var(--primary)' }}
                                    >
                                        {item}
                                    </motion.a>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4 className="footer-title">CONTACT</h4>
                        <motion.div className="contact-item" whileHover={{ y: -5, x: 5 }}>
                            <MapPin size={40} color="var(--primary)" />
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=Shop+No.103,+Akhilam+Corner,+Nr.Samarpan+Circle,+Opp.Kashi+Inn+Hotel,+Jamnagar+-+361006"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-contact-link"
                            >
                                Shop No.103, Akhilam Corner, Nr.Samarpan Circle, Opp.Kashi Inn Hotel, Jamnagar - 361006.
                            </a>
                        </motion.div>
                        <motion.div className="contact-item" whileHover={{ y: -5, x: 5 }}>
                            <Phone size={20} color="var(--primary)" />
                            <div className="phone-numbers">
                                <a href="tel:+918109009954" className="footer-contact-link">+91 81090 09954</a>
                            </div>
                        </motion.div>
                        <motion.div className="contact-item" whileHover={{ y: -5, x: 5 }}>
                            <Mail size={20} color="var(--primary)" />
                            <a href="mailto:info@bvminfra.com" className="footer-contact-link">info@bvminfra.com</a>
                        </motion.div>
                    </div>
                </div>
                <motion.div
                    className="footer-bottom"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <p>&copy; {new Date().getFullYear()} SolarFlow Inc. All rights reserved.</p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
