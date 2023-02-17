import Image from 'next/image';
import { Container } from './Container';
import { AnimatePresence, motion, Variant } from 'framer-motion';
import { easings } from '@/utils/easings';
import { useState } from 'react';
import classNames from 'classnames';
import { Modal } from './Modal';

interface IGallery {
    title: string;
    images: string[];
    hoverType?: 'blur' | 'bw';
}

const sectionVariants: { [key: string]: Variant } = {
    hide: {},
    show: {
        transition: {
            staggerChildren: 0.06,
        },
    },
};

const imageVariants = {
    hide: {
        scale: 1.2,
        x: -20,
        transition: {
            type: 'tween',
            ease: easings.easeOutQuart,
            duration: 0.9,
        },
    },
    show: {
        scale: 1.1,
        x: 0,
        transition: {
            type: 'tween',
            ease: easings.easeOutQuart,
            duration: 0.9,
        },
    },
};

const imageMaskVariants = {
    hide: {
        x: 0,
        transition: {
            type: 'tween',
            ease: easings.easeOutQuint,
            duration: 0.6,
        },
    },
    show: {
        x: '100%',
        transition: {
            type: 'tween',
            ease: easings.easeOutQuint,
            duration: 0.6,
        },
    },
};

export function Gallery({ title, images, hoverType = 'blur' }: IGallery) {
    const [isInViewportAnimating, setIsInViewportAnimating] = useState(false);
    // const [currentImageId, setCurrentImageId] = useState<number | null>(null);
    const [itemIdIsHover, setItemIdIsOver] = useState<number | null>(null);
    return (
        <motion.section
            className="py-40 relative"
            variants={sectionVariants}
            onViewportEnter={() => setIsInViewportAnimating(true)}
            onViewportLeave={() => setIsInViewportAnimating(false)}
            viewport={{ amount: 0.3, margin: '0px 0px -100px 0px' }}
            animate={isInViewportAnimating ? 'show' : 'hide'}>
            <Container>
                <h2 className={`font-playfair uppercase text-right text-5xl`}>{title}</h2>
                <div className="mt-8 md:grid md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {images.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className={`col-span-2 aspect-square relative overflow-hidden mb-6 md:mb-0`}>
                                {/* image mask */}
                                <motion.div
                                    className="absolute inset-0 bg-white z-20"
                                    variants={imageMaskVariants}></motion.div>

                                {/* image wrapper to handle hover */}
                                <motion.div
                                    className="w-full h-full relative z-10"
                                    variants={imageVariants}
                                    onHoverStart={() => setItemIdIsOver(index)}
                                    onHoverEnd={() => setItemIdIsOver(null)}>
                                    {/* overlay for hover animation */}
                                    <div
                                        className={classNames(
                                            'absolute inset-0 bg-black z-10 pointer-events-none',
                                            'transition-all duration-150 ease-linear',
                                            {
                                                'opacity-20': itemIdIsHover !== index,
                                            },
                                            {
                                                'opacity-0': itemIdIsHover === null || itemIdIsHover === index,
                                            }
                                        )}
                                    />

                                    <Image
                                        fill
                                        src={item}
                                        alt=""
                                        sizes="(max-width: 767px) 100vw,
                                                    (max-width: 1023px) 50vw,
                                                    30vw"
                                        className={classNames(
                                            'object-cover object-center transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-2',
                                            {
                                                'blur-[2px]':
                                                    hoverType === 'blur' &&
                                                    itemIdIsHover !== null &&
                                                    itemIdIsHover !== index,
                                            },
                                            {
                                                grayscale: hoverType === 'bw' && itemIdIsHover !== index,
                                            }
                                        )}
                                    />
                                </motion.div>
                            </div>
                        );
                    })}

                    {/*
                    <AnimatePresence>
                        {images.map((item, index) => {
                            return (
                                currentImageId === index && (
                                    <motion.div
                                        key={index}
                                        layoutId={`layout-${index}`}
                                        className={classNames(
                                            "fixed top-0 left-0 z-40",
                                            "w-screen h-screen",
                                            "flex items-center justify-center",
                                            "bg-white"
                                        )}
                                    >
                                        <Image
                                            width="16"
                                            height="9"
                                            src={item}
                                            alt=""
                                            sizes="90vw"
                                            className="block w-[65vw] h-auto"
                                            onClick={() => {
                                                setCurrentImageId(null);
                                            }}
                                        />
                                        <button
                                            className="absolute top-24 right-2 border-black border w-12 h-12 flex items-center justify-center"
                                            onClick={() =>
                                                setCurrentImageId(null)
                                            }
                                        >
                                            X
                                        </button>
                                    </motion.div>
                                )
                            );
                        })}
                    </AnimatePresence>
                    */}
                </div>
            </Container>

            <Modal title="Gallery">
                <ul className="c-content-list">
                    <li>
                        <strong>Scroll-triggered animation</strong>: reveals cards one by one once the component is in
                        viewport
                    </li>
                    <li>
                        <strong>Hover effect</strong>: turns hovered image coloured, and leaves the other ones black and
                        white
                    </li>
                    <li>
                        <strong>Variation</strong>: when you hover a card, blurs the other ones
                    </li>
                </ul>
            </Modal>
        </motion.section>
    );
}
