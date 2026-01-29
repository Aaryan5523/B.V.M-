import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
    const sectionRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        botField: '', // 🛑 honeypot field
    });

    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (sectionRef.current) {
            gsap.fromTo(
                sectionRef.current,
                { opacity: 0, y: 60 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 80%',
                    },
                }
            );
        }
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // 🛑 BOT CHECK (honeypot)
        if (formData.botField) {
            console.warn('Bot detected via honeypot');
            return;
        }

        setIsSubmitting(true);
        setStatus({ type: 'loading', message: 'Sending your message...' });

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            // Handle non-JSON or error responses gracefully
            const contentType = res.headers.get("content-type");
            if (!contentType || !contentType.includes("application/json")) {
                throw new Error("Local API not found. Please ensure you are running the project correctly.");
            }

            const data = await res.json();

            if (!res.ok) throw new Error(data.error || 'Failed to send');

            setStatus({
                type: 'success',
                message: 'Thank you! Our solar experts will contact you shortly.',
            });

            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
                botField: '',
            });
        } catch (error) {
            console.error('Submission Error:', error);
            setStatus({
                type: 'error',
                message: error.message || 'Something went wrong. Please try again later.',
            });
        } finally {
            setIsSubmitting(false);
            // Optional: reset message after a while
            setTimeout(() => setStatus(prev => prev.type === 'loading' ? prev : { type: '', message: '' }), 5000);
        }
    };

    return (
        <div className="contact-page">
            <section className="contact-hero">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="about-subtitle" style={{ color: 'var(--primary)' }}>Connect With Us</span>
                        <h1 className="contact-title">Let's Power Your Future</h1>
                    </motion.div>
                </div>
            </section>

            <section className="contact-container" ref={sectionRef}>
                <div className="container">
                    <div className="contact-grid-main">
                        <motion.div
                            className="contact-info-panel"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="form-header-premium">
                                <h2>Get in Touch</h2>
                                <p>We're here to help you transition to clean, sustainable energy. Reach out for any inquiries or a free consultation.</p>
                            </div>

                            <div className="contact-info-list">
                                <InfoCard
                                    icon={<MapPin size={28} />}
                                    title="Our Location"
                                    content="Shop No.103, Akhilam Corner, Nr.Samarpan Circle, Opp.Kashi Inn Hotel, Jamnagar - 361006. clean energy hub, Green Valley, Solar City, 361001"
                                />
                                <InfoCard
                                    icon={<Phone size={28} />}
                                    title="Phone Number"
                                    content="+91 81090 09954 (Main Office)"
                                />
                                <InfoCard
                                    icon={<Mail size={28} />}
                                    title="Email Address"
                                    content="info@bvminfra.com"
                                />
                                <InfoCard
                                    icon={<Clock size={28} />}
                                    title="Working Hours"
                                    content="Mon - Sat: 9:00 AM - 7:00 PM"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            className="contact-form-premium"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="form-header-premium">
                                <h2>Send a Message</h2>
                                <p>Fill out the form below and our solar experts will get back to you within 24 hours.</p>
                            </div>

                            <form onSubmit={handleSubmit}>
                                {/* 🛑 HIDDEN BOT FIELD */}
                                <input
                                    type="text"
                                    name="botField"
                                    value={formData.botField}
                                    onChange={handleChange}
                                    className="hidden-honeypot"
                                    style={{ display: 'none' }}
                                    tabIndex="-1"
                                    autoComplete="off"
                                />

                                <div className="contact-form-row">
                                    <div className="premium-input-group">
                                        <label>Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Enter your name"
                                            required
                                        />
                                    </div>
                                    <div className="premium-input-group">
                                        <label>Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="contact-form-row">
                                    <div className="premium-input-group">
                                        <label>Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Enter your phone number"
                                        />
                                    </div>
                                    <div className="premium-input-group">
                                        <label>Inquiry Type</label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="Enter your inquiry type"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="premium-input-group">
                                    <label>Your Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your requirements..."
                                        rows="6"
                                        required
                                    ></textarea>
                                </div>

                                <motion.button
                                    type="submit"
                                    className={`submit-btn-premium ${isSubmitting ? 'loading' : ''}`}
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                                    <Send size={20} />
                                </motion.button>

                                {status.message && (
                                    <div className={`form-feedback ${status.type}`}>
                                        {status.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                                        {status.message}
                                    </div>
                                )}
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const InfoCard = ({ icon, title, content }) => (
    <div className="info-card-premium">
        <div className="info-icon-wrapper">
            {icon}
        </div>
        <div className="info-content">
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    </div>
);

export default ContactPage;
