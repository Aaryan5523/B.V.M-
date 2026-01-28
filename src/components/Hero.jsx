import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
    const slides = [
        {
            image: 'https://wallpapers.com/images/hd/solar-panel-1920-x-1080-background-o1bfvhmd5ua6jwzg.jpg',
            title: 'Powering the Future with Clean Energy',
            subtitle: 'Switch to solar and reduce your energy bills while helping the planet.'
        },
        {
            image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop',
            title: 'Sustainable Solutions for Your Home',
            subtitle: 'Premium solar panels designed for efficiency and durability.'
        },
        {
            image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2075&auto=format&fit=crop',
            title: 'Invest in a Greener Tomorrow',
            subtitle: 'Join thousands of homeowners making the switch to renewable energy.'
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <section id="home" className="hero-container">
            <AnimatePresence mode='wait'>
                <motion.div
                    key={currentSlide}
                    className="hero"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    style={{
                        backgroundImage: `linear-gradient(rgba(26, 43, 60, 0.6), rgba(26, 43, 60, 0.6)), url('${slides[currentSlide].image}')`
                    }}
                >
                    <div className="container">
                        <motion.div
                            className="hero-content"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1>{slides[currentSlide].title}</h1>
                            <p>{slides[currentSlide].subtitle}</p>
                            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                                <a href="/shop" className="btn btn-primary">Shop Collections</a>
                                <a href="/about" className="btn btn-secondary">Learn More</a>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </section>
    );
};

export default Hero;
