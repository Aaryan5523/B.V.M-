import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const products = [
    {
        id: 1,
        category: 'Residential',
        name: 'Elite Home Panel X1',
        image: '/panel1.png',
        features: ['450W Max Output', '22.8% Efficiency', 'Sleek Black Design']
    },
    {
        id: 2,
        category: 'Commercial',
        name: 'Industrial Peak 500',
        image: '/panel2.png',
        features: ['550W High Power', 'Reinforced Frame', 'Extreme Durability']
    },
    {
        id: 3,
        category: 'Storage',
        name: 'PowerVault Pro 10',
        image: '/battery1.png',
        features: ['10kWh Capacity', 'Smart Monitoring', '15-Year Life Cycle']
    },
    {
        id: 4,
        category: 'Residential',
        name: 'Compact Mono S2',
        image: '/panel1.png',
        features: ['380W Efficient', 'Space Saving', 'Premium Finish']
    },
    {
        id: 5,
        category: 'Storage',
        name: 'PowerVault Lite 5',
        image: '/battery1.png',
        features: ['5kWh Modular', 'Fast Charging', 'Easy Install']
    }
];

const categories = ['All', 'Residential', 'Commercial', 'Storage'];

const ProductCollection = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProducts = activeCategory === 'All'
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <section id="collection" className="collection-section">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <span style={{ color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '0.5rem' }}>Solar Series</span>
                    <h2>Our Signature Collection</h2>

                    <div className="filter-tabs">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                                onClick={() => setActiveCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div layout className="grid grid-3" style={{ gap: '1.5rem' }}>
                    <AnimatePresence mode='popLayout'>
                        {filteredProducts.map((product, index) => (
                            <motion.div
                                key={product.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="product-card glass-panel"
                                style={{
                                    padding: '1.5rem',
                                    borderRadius: '1.5rem',
                                    border: '1px solid rgba(255, 215, 0, 0.1)'
                                }}
                            >
                                <div className="product-image" style={{ height: '180px', marginBottom: '1.5rem', borderRadius: '1rem', overflow: 'hidden', background: '#f8f8f8' }}>
                                    <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                </div>
                                <div className="product-info" style={{ textAlign: 'left' }}>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase' }}>{product.category}</span>
                                    <h3 style={{ fontSize: '1.25rem', margin: '0.5rem 0' }}>{product.name}</h3>
                                    <ul className="product-features" style={{ padding: 0, listStyle: 'none', margin: '1rem 0' }}>
                                        {product.features.map((feat, i) => (
                                            <li key={i} style={{ fontSize: '0.9rem', opacity: 0.7, marginBottom: '0.4rem', display: 'flex', alignItems: 'center' }}>
                                                <span style={{ color: 'var(--primary)', marginRight: '0.5rem' }}>•</span> {feat}
                                            </li>
                                        ))}
                                    </ul>
                                    <button className="btn btn-secondary" style={{ width: '100%', marginTop: '0.5rem', borderRadius: '0.8rem' }}>View Specs</button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default ProductCollection;
