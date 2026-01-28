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
                    <span style={{ color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px' }}>Solar Series</span>
                    <h2 style={{ fontSize: '3rem', marginTop: '0.5rem' }}>Our Signature Collection</h2>

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

                <motion.div layout className="grid grid-3">
                    <AnimatePresence mode='popLayout'>
                        {filteredProducts.map(product => (
                            <motion.div
                                key={product.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="product-card"
                            >
                                <div className="product-image">
                                    <img src={product.image} alt={product.name} />
                                </div>
                                <div className="product-info">
                                    <h3>{product.name}</h3>
                                    <ul className="product-features">
                                        {product.features.map((feat, i) => (
                                            <li key={i}>{feat}</li>
                                        ))}
                                    </ul>
                                    <button className="btn btn-secondary" style={{ width: '100%', marginTop: '1rem' }}>View Specifications</button>
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
