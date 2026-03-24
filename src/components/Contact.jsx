import React from 'react';
import { motion } from 'framer-motion';
import { Magnetic } from './Interactions';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-v2">
            <motion.div
                className="bento-card contact-bento"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <div className="contact-v2-header">
                    <h2 className="section-title">Initiate <span className="text-gradient">Protocol</span></h2>
                    <p className="section-subtitle">Secure communications for enterprise-scale autonomous solutions.</p>
                </div>

                <form className="contact-v2-form" onSubmit={(e) => e.preventDefault()}>
                    <fieldset className="form-bento-grid">
                        <legend className="sr-only">Contact Details</legend>
                        <div className="form-node glass">
                            <label htmlFor="entity-name">ENTITY NAME</label>
                            <input id="entity-name" type="text" placeholder="Global Identifier" />
                        </div>
                        <div className="form-node glass">
                            <label htmlFor="comm-point">COMMUNICATION POINT</label>
                            <input id="comm-point" type="email" placeholder="secure@protocol.com" />
                        </div>
                        <div className="form-node glass span-2">
                            <label htmlFor="objective">OBJECTIVE DESCRIPTION</label>
                            <textarea id="objective" placeholder="Outline the parameters of your autonomous requirements..." />
                        </div>
                    </fieldset>

                    <div className="contact-footer">
                        <Magnetic strength={0.2}>
                            <button className="btn-premium">
                                Establish Connection
                                <div className="shimmer" />
                            </button>
                        </Magnetic>
                    </div>
                </form>
            </motion.div>
        </section>
    );
};

export default Contact;
