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
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--secondary)' }}>Why Choose SolarFlow?</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto' }}>We provide top-of-the-line solar technology designed to maximize efficiency and minimize environmental impact.</p>
                </div>
                <div className="grid grid-4">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            className="feature-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="feature-icon">{f.icon}</div>
                            <h3>{f.title}</h3>
                            <p>{f.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
