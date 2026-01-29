import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Zap, Heart, Users, Globe, Award } from 'lucide-react';
import './About.css';

const AboutPage = () => {
    // Using high-quality, stable Unsplash links that allow hotlinking
    const sliderImages = [
        "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?q=80&w=1000&auto=format&fit=crop"
    ];

    const heroImage = "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?q=80&w=1000&auto=format&fit=crop";

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [sliderImages.length]);

    return (
        <div className="about-page">
            <section className="about-hero">
                <img
                    src={heroImage}
                    alt="Solar Energy"
                    className="about-hero-img"
                />
                <motion.div
                    className="container"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="about-subtitle">Who we are</span>
                    <h1 className="serif-title">Our Journey to a Sustainable Future</h1>
                </motion.div>
            </section>

            <section className="history-section">
                <div className="container">
                    <div className="grid grid-2 about-history-grid">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="about-subtitle">Legacy of Trust</span>
                            <h2 className="about-title-serif">Powering dreams with clean energy since 2015.</h2>
                            <p className="about-text">
                                SolarFlow was founded on a simple yet powerful idea: that every rooftop represents an opportunity to contribute to a greener planet. What started as a small team of passionate engineers in a local workshop has grown into a leading force in sustainable energy solutions.
                            </p>
                            <p className="about-text">
                                Today, we are proud to be a trusted partner for thousands of homeowners and businesses, helping them take control of their energy future while significantly reducing their carbon footprint.
                            </p>
                        </motion.div>

                        <div className="about-image-slider-container">
                            <AnimatePresence mode='wait'>
                                <motion.img
                                    key={currentImageIndex}
                                    src={sliderImages[currentImageIndex]}
                                    alt="Solar Innovation"
                                    className="about-slider-img"
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 1, ease: "easeInOut" }}
                                />
                            </AnimatePresence>
                        </div>
                    </div>

                    <div className="stats-grid-premium">
                        <div className="stat-item-premium">
                            <span className="stat-number">10k+</span>
                            <span className="stat-label">Happy Clients</span>
                        </div>
                        <div className="stat-item-premium">
                            <span className="stat-number">50MW+</span>
                            <span className="stat-label">Clean Energy Generated</span>
                        </div>
                        <div className="stat-item-premium">
                            <span className="stat-number">15+</span>
                            <span className="stat-label">Years of Experience</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="vision-section">
                <div className="container">
                    <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <span className="about-subtitle" style={{ color: 'var(--primary)' }}>Our Core Values</span>
                        <h2 className="about-title-serif" style={{ color: 'white' }}>Building a legacy of excellence and integrity.</h2>
                    </div>

                    <div className="values-grid">
                        <ValueCard
                            icon={<Zap size={40} />}
                            title="Innovation"
                            desc="We constantly push the boundaries of what's possible in solar technology to deliver maximum efficiency."
                        />
                        <ValueCard
                            icon={<Shield size={40} />}
                            title="Reliability"
                            desc="Our systems are built to last, providing you with consistent power you can count on for decades."
                        />
                        <ValueCard
                            icon={<Heart size={40} />}
                            title="Sustainability"
                            desc="Every decision we make is guided by our commitment to preserving the environment for future generations."
                        />
                        <ValueCard
                            icon={<Users size={40} />}
                            title="Community"
                            desc="We believe in empowering local communities with the tools and knowledge to thrive independently."
                        />
                        <ValueCard
                            icon={<Globe size={40} />}
                            title="Transparency"
                            desc="We maintain open and honest communication throughout every stage of your solar journey."
                        />
                        <ValueCard
                            icon={<Award size={40} />}
                            title="Excellence"
                            desc="We don't just meet industry standards; we set them through meticulous craftsmanship and service."
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

const ValueCard = ({ icon, title, desc }) => (
    <motion.div
        className="value-card"
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
    >
        <div className="value-icon">{icon}</div>
        <h3 className="value-title">{title}</h3>
        <p className="value-desc">{desc}</p>
    </motion.div>
);

export default AboutPage;
