import React from 'react';
import { Battery, ShieldCheck, Zap, TrendingDown } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: <Zap size={32} />,
        title: "High Efficiency",
        description: "Our panels capture more sunlight and convert it into more power for your home."
    },
    {
        icon: <TrendingDown size={32} />,
        title: "Cost Savings",
        description: "Significant reduction in monthly energy bills from day one of installation."
    },
    {
        icon: <Battery size={32} />,
        title: "Energy Storage",
        description: "Integrated battery solutions to keep your home powered throughout the night."
    },
    {
        icon: <ShieldCheck size={32} />,
        title: "25-Year Warranty",
        description: "Long-term peace of mind with our industry-leading performance guarantee."
    }
];

const Features = () => {
    return (
        <section id="features" style={{ background: 'var(--bg-gray)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2>Why Choose SolarFlow?</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto' }}>We provide top-of-the-line solar technology designed to maximize efficiency and minimize environmental impact.</p>
                </div>
                <div className="grid grid-4" style={{ gap: '1.5rem' }}>
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            className="feature-card glass-panel animate-float"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            style={{
                                animationDelay: `${i * 0.5}s`,
                                padding: '2rem',
                                borderRadius: '1.5rem',
                                border: '1px solid rgba(255, 215, 0, 0.2)'
                            }}
                        >
                            <div className="feature-icon" style={{
                                width: '64px', height: '64px',
                                background: 'var(--primary)',
                                color: 'var(--secondary)',
                                borderRadius: '1rem',
                                marginBottom: '1.5rem'
                            }}>{f.icon}</div>
                            <h3>{f.title}</h3>
                            <p style={{ fontSize: '0.95rem', opacity: 0.8 }}>{f.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
