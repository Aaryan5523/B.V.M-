import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1>Powering the Future with Clean Energy</h1>
                    <p>Switch to solar and reduce your energy bills while helping the planet. Premium solar solutions tailored for your home.</p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <a href="#contact" className="btn btn-primary">Free Quote</a>
                        <a href="#features" className="btn btn-secondary">Learn More</a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
