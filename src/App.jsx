import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Technology from './components/Technology';
import Contact from './components/Contact';
import { CustomCursor } from './components/Interactions';
import { motion } from 'framer-motion';
import abstractTechBg from './assets/abstract-tech-bg.jpg';
import './App.css';

function App() {
  return (
    <div className="app-v2">
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <Features />
        <Technology />
        <Contact />
      </main>

      <div className="bottom-background">
        <div className="bottom-background-gradient" />
        <img src={abstractTechBg} alt="" className="bottom-background-img" />
        <div className="bottom-background-gradient-bottom" />
      </div>

      <footer className="footer-v2">
        <div className="footer-v2-content">
          <div className="footer-branding">
            <span className="logo-main">NANOCLONE SYSTEMS</span>
            <p>Enterprise-Scale Solutions. Automated.</p>
          </div>
          <div className="footer-links-v2">
            <div className="link-group">
              <span>Protocol</span>
              <a href="#">Solutions</a>
              <a href="#">Architecture</a>
            </div>
            <div className="link-group">
              <span>Legal</span>
              <a href="#">Security</a>
              <a href="#">Privacy</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 NANOCLONE Systems. Proprietary & Confidential.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
