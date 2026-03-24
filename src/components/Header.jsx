import React from 'react';
import { motion } from 'framer-motion';
import { Magnetic } from './Interactions';
import './Header.css';

const Header = () => {
  return (
    <motion.header
      className="header-v2"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", damping: 20, stiffness: 100 }}
    >
      <div className="header-v2-container glass">
        <div className="header-logo">
          <span className="logo-main">NANOCLONE SYSTEMS</span>
          <div className="logo-version">V4.0</div>
        </div>

        <nav className="header-nav">
          <a href="#features">Solutions</a>
          <a href="#about">Architecture</a>
          <div className="nav-divider" />
          <Magnetic strength={0.1}>
            <a href="#contact" className="btn-nav btn-establish">[Establish Connection]</a>
          </Magnetic>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
