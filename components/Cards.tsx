import Image from 'next/image';
import Link from 'next/link';
import { Card, TCardAnimationType } from './Card';
import { Container } from './Container';
import { ICard } from './Card';
import { useState } from 'react';
import { motion, Variant } from 'framer-motion';
import { easings } from '@/utils/easings';
import classNames from 'classnames';

interface ICards {
    title: string;
    cards: ICard[];
    type?: TCardAnimationType;
}

const sectionVariants: { [key: string]: Variant } = {
    hide: {
        opacity: 0,
        transition: {},
    },
    show: {
        opacity: 1,
        transition: {
            type: 'tween',
            duration: 0.6,
            staggerChildren: 0.1,
        },
    },
};

const cardsVariants = {
    hide: {
        y: 15,
        opacity: 0,
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'tween',
            ease: easings.easeOutQuint,
            duration: 0.9,
        },
    },
};

export function Cards({ title, cards, type = 'type1' }: ICards) {
    const [isInViewportAnimating, setIsInViewportAnimating] = useState(false);
    const titleClass = type === 'type1' ? 'text-black' : 'text-verb font-bold';
    return (
        <motion.div
            className="py-24"
            variants={sectionVariants}
            onViewportEnter={() => setIsInViewportAnimating(true)}
            onViewportLeave={() => setIsInViewportAnimating(false)}
            viewport={{ amount: 0.3, margin: '0px 0px -100px 0px' }}
            animate={isInViewportAnimating ? 'show' : 'hide'}>
            <Container>
                <h2 className={`font-playfair uppercase text-center text-5xl ${titleClass}`}>{title}</h2>
                <div
                    className={classNames(
                        'mt-6 md:grid',
                        { 'md:grid-cols-2 lg:grid-cols-4': cards.length % 4 === 0 },
                        { 'md:grid-cols-3': cards.length % 3 === 0 }
                    )}>
                    {cards.map((item, index) => (
                        <motion.div key={index} className="mb-6 md:mb-0" variants={cardsVariants}>
                            <Card {...item} type={type}></Card>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </motion.div>
    );
}
