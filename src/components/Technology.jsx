import React from 'react';
import { motion } from 'framer-motion';
import './Technology.css';

const specs = [
    { label: "Latency", val: "< 120ms" },
    { label: "Precision", val: "99.99%" },
    { label: "Nodes", val: "14k+" },
    { label: "Uptime", val: "99.9%" }
];

const Technology = () => {
    return (
        <section id="about" className="tech-v2">
            <div className="bento-grid">
                <motion.div
                    className="bento-card tech-main-card"
                    style={{ gridColumn: "span 12" }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="tech-hero-content">
                        <h2 className="section-title">Architectural <span className="text-gradient">Precision</span></h2>
                        <p className="section-subtitle">Systems designed for high-density autonomous logic.</p>
                    </div>

                    <div className="tech-specs-grid">
                        {specs.map((spec, idx) => (
                            <div key={`spec-${idx}-${spec.label.toLowerCase()}`} className="spec-tile">
                                <span className="spec-label">{spec.label}</span>
                                <span className="spec-val">{spec.val}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className="bento-card"
                    style={{ gridColumn: "span 6" }}
                    whileInView={{ opacity: 1 }}
                >
                    <div className="bento-content">
                        <h3 className="bento-title">Cluster Logic</h3>
                        <p className="bento-description">Decentralized decision-making protocols that scale horizontally with zero overhead.</p>
                    </div>
                </motion.div>

                <motion.div
                    className="bento-card"
                    style={{ gridColumn: "span 6" }}
                    whileInView={{ opacity: 1 }}
                >
                    <div className="bento-content">
                        <h3 className="bento-title">Neural Pipelines</h3>
                        <p className="bento-description">Low-level data synthesis utilizing specialized local-inference models for security.</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Technology;
