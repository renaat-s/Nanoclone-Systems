import React, { useRef, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const CustomCursor = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 30, stiffness: 1000, mass: 0.05 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            if (!document.documentElement.classList.contains('custom-cursor-active')) {
                document.documentElement.classList.add('custom-cursor-active');
            }
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        window.addEventListener('mousemove', moveCursor, { passive: true });
        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.documentElement.classList.remove('custom-cursor-active');
        };
    }, [cursorX, cursorY]);

    return (
        <motion.div
            className="custom-cursor"
            style={{
                translateX: cursorXSpring,
                translateY: cursorYSpring,
                position: 'fixed',
                left: 0,
                top: 0,
                width: '12px',
                height: '12px',
                backgroundColor: 'white',
                borderRadius: '50%',
                pointerEvents: 'none',
                zIndex: 99999,
                mixBlendMode: 'difference',
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)'
            }}
        />
    );
};

export const Magnetic = ({ children, strength = 0.5 }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { type: "spring", stiffness: 200, damping: 20, mass: 0.1 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const targetX = (clientX - (left + width / 2)) * strength;
        const targetY = (clientY - (top + height / 2)) * strength;
        x.set(targetX);
        y.set(targetY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: springX, y: springY }}
        >
            {children}
        </motion.div>
    );
};
