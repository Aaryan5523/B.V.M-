import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data';
import './Shop.css';

const Shop = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', ...new Set(products.map(p => p.category))];

    const filteredProducts = activeCategory === 'All'
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <div className="shop-page">
            <header className="shop-header">
                <div className="container">
                    <p className="subtitle gold-text">The Collection</p>
                    <h1 className="serif-title">Discover SolarFlow series</h1>
                </div>
            </header>

            <section className="section-padding container">
                <div className="filter-nav">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`filter-btn-shop ${activeCategory === category ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="product-grid">
                    {filteredProducts.map((product, index) => (
                        <ProductCard key={product.id} {...product} index={index} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Shop;
