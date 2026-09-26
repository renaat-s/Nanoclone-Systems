import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Brain, Shield, ArrowRight } from 'lucide-react';
import invoiceiqLogo from '../assets/invoiceiq-logo.png';
import pyresecIcon from '../assets/pyresec-icon.png';
import scrapetraIcon from '../assets/scrapetra-icon.png';
import abstractVideo from '../assets/abstract.mp4';
import './Features.css';

const features = [
    { icon: Zap, title: "BookScanIQ", description: "Precision-engineered financial agents with integrated n8n orchestration. High-throughput data synthesis and reconciliation.", span: "span 12", delay: 0.1, useCustomIcon: true, link: "https://bookscaniq.com/", expandedContent: "BookScanIQ's enterprise architecture automates the lifecycle of every invoice and receipt with a verified 99% accuracy threshold. By orchestrating seamless extraction and validation, we eliminate manual volatility—reclaiming your team's most valuable asset: time." },
    { icon: Zap, title: "PYRESEC", description: "AI-powered code security auditing via x402 micropayments on Base. SAST, SCA, and automated remediation with no accounts or subscriptions.", span: "span 12", delay: 0.2, useCustomIcon: true, iconSrc: pyresecIcon, link: "https://pyresec-agent-519576377065.us-central1.run.app/docs", expandedContent: "PYRESEC autonomously audits source code for vulnerabilities using SAST pattern matching and LLM-driven analysis. Three service tiers — Quick Scan at $0.01, Deep Audit at $0.50, and Automated Remediation at $5.00 — all paid via x402 USDC micropayments on Base Mainnet. No API keys, no accounts, just code in and findings out." },
    { icon: Zap, title: "ScrapeTra", description: "Autonomous B2B lead generation agent. Scrapes, verifies, and delivers verified company leads with instant outreach and CSV delivery.", span: "span 12", delay: 0.3, useCustomIcon: true, iconSrc: scrapetraIcon, link: "https://www.scrapetra.com", expandedContent: "ScrapeTra autonomously scrapes and verifies business leads from public directories and company websites. Every lead is syntax-checked and MX-validated against DNS records. Fresh data harvested today — not recycled from stale databases. Purchase a lead package and receive verified contacts with instant pitch outreach, automated follow-up drip sequences, and CSV delivery within 60 seconds of payment. One-time price with no subscription." }
];

const FeatureCard = ({ title, description, icon: Icon, span = "span 12", delay = 0, useCustomIcon = false, iconSrc = null, link = "#", expandedContent }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpandClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsExpanded(!isExpanded);
    };

    return (
        <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`bento-card ${isExpanded ? 'expanded' : ''}`}
            style={{ gridColumn: span }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className="bento-content">
                <div className="bento-header">
                    <div className="bento-icon-wrapper">
                        {useCustomIcon ? (
                            <img src={iconSrc || invoiceiqLogo} alt={title} className="bento-custom-icon" />
                        ) : (
                            <Icon className="bento-icon" />
                        )}
                    </div>
                    <h3 className="bento-title">{title}</h3>
                </div>
                <p className="bento-description">{description}</p>
                {expandedContent && (
                    <div className="bento-expanded-content">
                        <p>{expandedContent}</p>
                    </div>
                )}
                <div className="bento-footer">
                    <span className="bento-link" onClick={handleExpandClick}>
                        {isExpanded ? 'Close Protocol' : 'Protocol Detail'} 
                        <ArrowRight size={14} style={{ transform: isExpanded ? 'rotate(90deg)' : 'none' }} />
                    </span>
                </div>
            </div>
            <div className="bento-accent-glow" />
        </motion.a>
    );
};

const Features = () => {
    return (
        <section id="features" className="features-v2">
            <video 
                className="features-video-bg" 
                autoPlay 
                muted 
                loop 
                playsInline
            >
                <source src={abstractVideo} type="video/mp4" />
            </video>
            
            <div className="video-gradient-bottom" />
            
            <div className="bento-container">
                <motion.div
                    className="bento-intro"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Autonomous <span className="text-gradient">Solutions</span></h2>
                    <p className="section-subtitle">Tactile architecture for decentralized business logic.</p>
                </motion.div>

                <div className="bento-grid">
                    {features.map((feature, idx) => (
                        <FeatureCard
                            key={`${idx}-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                            span={feature.span}
                            delay={feature.delay}
                            useCustomIcon={feature.useCustomIcon}
                            iconSrc={feature.iconSrc}
                            link={feature.link}
                            expandedContent={feature.expandedContent}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
