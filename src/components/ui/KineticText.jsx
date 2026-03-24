import React from 'react';
import { motion } from 'framer-motion';

const KineticText = ({ text, className = "" }) => {
    const letters = text.split("");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200,
            },
        },
    };

    return (
        <motion.h1
            className={className}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {letters.map((letter, index) => (
                <motion.span
                    key={`${index}-${letter}-${text.length}`}
                    variants={child}
                    className="kinetic-letter"
                    style={{
                        display: 'inline-block',
                        paddingRight: '0.05em',
                        marginRight: '-0.02em',
                        overflow: 'visible'
                    }}
                >
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </motion.h1>
    );
};

export default KineticText;
