import React from 'react';
import { motion } from 'framer-motion';

const ProductCard = ({ id, name, category, price, image, description, index }) => {
    return (
        <motion.div
            className="product-card-shop"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(26, 43, 60, 0.12)",
                transition: { duration: 0.4, ease: "easeOut" }
            }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
        >
            <div className="product-image-container">
                {/* Premium Shine Effect Overlay */}
                <span className="shine-overlay"></span>

                <motion.img
                    src={image}
                    alt={name}
                    className="product-img"
                    whileHover={{ scale: 1.1, rotate: index % 2 === 0 ? 1 : -1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                />
            </div>

            <div className="product-details">
                <span className="product-category-label">{category}</span>
                <h3 className="product-name-serif">{name}</h3>
                <p className="product-price-gold">{price}</p>
                <p className="product-desc-short">{description}</p>

                <motion.button
                    className="add-to-cart-btn"
                    whileHover={{
                        backgroundColor: "#1A2B3C",
                        color: "#fff",
                        scale: 1.05,
                        boxShadow: "0 10px 15px -3px rgba(26, 43, 60, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                >
                    Inquire Now
                </motion.button>
            </div>

            <style jsx>{`
                .product-card-shop {
                    background: #fff;
                    border: 1px solid rgba(0,0,0,0.05);
                    border-radius: 20px;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.04);
                    position: relative;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }

                .product-image-container {
                    position: relative;
                    height: 250px;
                    background: #fdfdfd;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                }

                @media (max-width: 768px) {
                    .product-image-container {
                        height: 220px;
                    }
                    .product-details {
                        padding: 25px 20px;
                    }
                    .product-name-serif {
                        font-size: 1.4rem;
                    }
                }

                /* Shine Effect CSS */
                .shine-overlay {
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 50%;
                    height: 100%;
                    background: linear-gradient(
                        to right,
                        transparent 0%,
                        rgba(255, 255, 255, 0.4) 50%,
                        transparent 100%
                    );
                    transform: skewX(-25deg);
                    z-index: 2;
                    transition: none;
                }

                .product-card-shop:hover .shine-overlay {
                    left: 150%;
                    transition: left 0.8s ease-in-out;
                }

                .product-img {
                    max-width: 80%;
                    max-height: 80%;
                    object-fit: contain;
                    z-index: 1;
                }

                .product-details {
                    padding: 35px 30px;
                    text-align: center;
                    background: white;
                    border-top: 1px solid #f9f9f9;
                }

                .product-category-label {
                    display: block;
                    font-size: 0.8rem;
                    color: var(--primary);
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    margin-bottom: 8px;
                }

                .product-name-serif {
                    font-family: 'Playfair Display', serif;
                    font-size: 1.6rem;
                    margin-bottom: 12px;
                    color: #1A2B3C;
                    letter-spacing: -0.01em;
                }

                .product-price-gold {
                    color: #D4AF37;
                    font-weight: 700;
                    margin-bottom: 20px;
                    font-size: 1.3rem;
                    letter-spacing: 1px;
                }

                .product-desc-short {
                    font-size: 0.95rem;
                    color: #555;
                    margin-bottom: 25px;
                    line-height: 1.7;
                    font-weight: 400;
                }

                .add-to-cart-btn {
                    background: var(--secondary);
                    border: none;
                    color: white;
                    padding: 16px 35px;
                    font-size: 0.85rem;
                    text-transform: uppercase;
                    letter-spacing: 2.5px;
                    font-weight: 700;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    border-radius: 12px;
                    width: 100%;
                }
            `}</style>
        </motion.div>
    );
};

export default ProductCard;
