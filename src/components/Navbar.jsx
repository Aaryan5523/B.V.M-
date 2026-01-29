import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Sun, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const linkStyle = { color: (isScrolled || !isHomePage) ? 'var(--secondary)' : 'white' };
  const iconColor = (isScrolled || !isHomePage || isMenuOpen) ? 'var(--secondary)' : 'white';

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    opened: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <motion.nav
        className={`navbar ${(isScrolled || !isHomePage) ? 'navbar-scrolled' : ''} ${isHomePage ? 'is-home' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="logo"
        >
          <NavLink to="/" className="logo-link">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              <Sun color="var(--primary)" fill="var(--primary)" size={32} />
            </motion.div>
            <span>B.V.M Infrastructure</span>
          </NavLink>
        </motion.div>

        {/* Desktop Links */}
        <ul className="nav-links">
          {navLinks.map((item) => (
            <motion.li
              key={item.name}
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <NavLink
                to={item.path}
                style={linkStyle}
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                {item.name}
              </NavLink>
            </motion.li>
          ))}
        </ul>

        {/* Hamburger Toggle */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={30} color="var(--secondary)" />
          ) : (
            <Menu size={30} color={iconColor} />
          )}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-nav-overlay"
            variants={menuVariants}
            initial="closed"
            animate="opened"
            exit="closed"
          >
            <button
              className="mobile-menu-close"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={35} color="white" />
            </button>
            <ul className="mobile-nav-links">
              {navLinks.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                >
                  <NavLink to={item.path} onClick={() => setIsMenuOpen(false)}>
                    {item.name}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
