import { useState, useRef } from 'react';
import Image from 'next/image';
import { Container } from './Container';
import classNames from 'classnames';
import { motion, MotionValue, useScroll, useTransform, Variant } from 'framer-motion';
import { easings } from '@/utils/easings';

const motionVariantsSection: { [key: string]: Variant } = {
    'hide': {},
    'show': {
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.1,
        },
    },
};

const motionVariantsMask: { [key: string]: Variant } = {
    'hide': {
        y: 0,
        scale: 1.1,
        transition: {
            type: 'tween',
            duration: 0.9,
            ease: easings.easeOutExpo,
        },
    },
    'show': {
        y: '-100%',
        scale: 1.1,
        transition: {
            type: 'tween',
            duration: 0.9,
            ease: easings.easeOutExpo,
        },
    },
};

const motionVariantsImage: { [key: string]: Variant } = {
    'hide': {
        scale: 1.2,
        y: -45,
        transition: {
            type: 'tween',
            duration: 1.2,
            ease: easings.easeOutExpo,
        },
    },
    'show': {
        scale: 1.2,
        y: 0,
        transition: {
            type: 'tween',
            duration: 1.2,
            ease: easings.easeOutExpo,
        },
    },
};

const motionVariantsText: { [key: string]: Variant } = {
    'hide': {
        y: 15,
        opacity: 0,
        transition: {
            type: 'tween',
            duration: 1.2,
            ease: easings.easeOutExpo,
        },
    },
    'show': {
        y: 0,
        opacity: 1,
        transition: {
            type: 'tween',
            duration: 1.2,
            ease: easings.easeOutExpo,
        },
    },
};

export interface IImageText {
    imgsrc: string;
    title?: string;
    text?: string;
    imgposition?: 'left' | 'right';
}

const useImgScrollParallax = (value: MotionValue<number>, amount: number) =>
    useTransform(value, [0, 1], [-amount, amount]);

export const ImageText = ({ imgsrc, title = undefined, text = undefined, imgposition = 'left' }: IImageText) => {
    const [isInViewportAnimating, setIsInViewportAnimating] = useState(false);
    const imgRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: imgRef, offset: ['center end', 'end start'] });
    const imgScroll = useImgScrollParallax(scrollYProgress, imgposition === 'left' ? 60 : -60);
    return (
        <motion.section
            className="py-36 -mb-36"
            onViewportEnter={() => setIsInViewportAnimating(true)}
            onViewportLeave={() => setIsInViewportAnimating(false)}
            viewport={{ margin: '0px 0px -50% 0px' }}
            variants={motionVariantsSection}
            animate={isInViewportAnimating ? 'show' : 'hide'}>
            <Container>
                <div
                    className={classNames(
                        'lg:grid grid-cols-12 gap-16',
                        { 'items-end': imgposition === 'left' },
                        { 'items-start': imgposition === 'right' }
                    )}>
                    {/* image */}
                    <div
                        className={classNames(
                            { 'lg:col-span-7 lg:col-start-1': imgposition === 'left' },
                            { 'lg:order-2 lg:col-span-6': imgposition === 'right' }
                        )}>
                        {/* image wrapper */}
                        <div
                            className={classNames(
                                'relative overflow-hidden',
                                { 'aspect-video': imgposition === 'left' },
                                { 'aspect-square': imgposition === 'right' }
                            )}>
                            {/* image mask */}
                            <motion.div
                                variants={motionVariantsMask}
                                animate={isInViewportAnimating ? 'show' : 'hide'}
                                className="absolute inset-0 z-20 -translate-x-1/2 bg-white"></motion.div>

                            {/* wrapper to animate image */}
                            <motion.div
                                style={{ x: imgScroll }}
                                variants={motionVariantsImage}
                                animate={isInViewportAnimating ? 'show' : 'hide'}
                                className="h-full w-full relative">
                                <Image
                                    ref={imgRef}
                                    className="object-cover z-10"
                                    fill
                                    src={imgsrc}
                                    alt=""
                                    sizes="(max-width: 767px) 100vw, 50vw"
                                />
                            </motion.div>
                        </div>
                    </div>

                    {/* text */}
                    <div
                        className={classNames('lg:col-span-4', {
                            'lg:order-1 text-right lg:sticky lg:top-24 lg:col-start-2': imgposition === 'right',
                        })}>
                        {title && (
                            <motion.h2 variants={motionVariantsText} className="text-4xl font-bold font-playfair">
                                {title}
                            </motion.h2>
                        )}
                        {text && (
                            <motion.div variants={motionVariantsText} className="mt-4 text-lg">
                                {text}
                            </motion.div>
                        )}
                    </div>
                </div>
            </Container>
        </motion.section>
    );
};
