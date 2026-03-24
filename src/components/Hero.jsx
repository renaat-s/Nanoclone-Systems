import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';
import { Magnetic } from './Interactions';
import './Hero.css';

import KineticText from './ui/KineticText';

const Hero = () => {
    return (
        <section className="hero-v2">
            <div className="hero-v2-background">
                <motion.div
                    className="ambient-orb orange"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                    className="ambient-orb teal"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.4, 0.7, 0.4]
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                />
            </div>

            <div className="hero-v2-content">
                <motion.img
                    src={logo}
                    alt="Nanoclone Systems"
                    className="hero-logo-v2"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                />

                <KineticText
                    text="Engineering Autonomy"
                    className="kinetic-header"
                />

                <motion.p
                    className="hero-subline"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                >
                    Tactile Intelligence for Global Enterprise.
                    <span className="sculpted-badge">Proprietary V4.0</span>
                </motion.p>

                <motion.div
                    className="hero-cta-group"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                >
                    <Magnetic strength={0.1}>
                        <button className="btn-premium">
                            Initiate Discovery
                            <div className="shimmer" />
                        </button>
                    </Magnetic>
                    <button className="btn-ghost">View Specifications</button>
                </motion.div>
            </div>

            <motion.div
                className="scroll-indicator"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <span className="scroll-line" />
            </motion.div>
        </section>
    );
};

export default Hero;
