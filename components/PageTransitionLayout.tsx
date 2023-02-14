import { motion } from 'framer-motion';
import React from 'react';
import { easings } from '../utils/easings';

const motionVariants = {
    from: {
        x: 60,
        opacity: 0,
    },
    to: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'tween',
            duration: 0.9,
            ease: easings.easeOutCubic,
            delay: -0.3,
        },
    },
    exit: {
        opacity: 0.25,
        transition: {
            type: 'tween',
            ease: easings.easeInOutCubic,
            duration: 0.6,
        },
    },
};

export const PageTransitionLayout = ({ children }: { children: React.ReactNode }) => (
    <motion.div variants={motionVariants} initial="from" animate="to" exit="exit">
        {children}
    </motion.div>
);
