import classNames from 'classnames';
import { motion, Variant } from 'framer-motion';
import Image from 'next/image';
import { Container } from './Container';
import { Button } from './Button';
import { BgTitle } from './BgTitle';
import { TBgTitleVariants } from './BgTitle';
import { BgText } from './BgText';
import { TBgTextVariants } from './BgText';
import { TButtonVariant } from './Button';
import { useState } from 'react';
import { StaticImageData } from 'next/image';

const motionImageVariants: { [key: string]: Variant } = {
    base: {
        scale: 1,
    },
    animate: {
        scale: 1.3,
        transition: {
            type: 'tween',
            duration: 15,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
            repeatDelay: 3,
        },
    },
};

const motionTitleVariants: { [key: string]: Variant } = {
    base: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            type: 'tween',
            duration: 1.8,
            ease: 'linear',
            delay: 2,
        },
    },
};

export const CinemaHero = ({
    imgsrc,
    title,
    text,
    ctaUrl,
    ctaText,
    titleVariant = 'white',
    textVariant = 'white',
    btnVariant = 'black',
    imagePriority = true,
}: {
    imgsrc: StaticImageData;
    title: string;
    text?: string;
    ctaUrl?: string;
    ctaText?: string;
    variant?: 'left' | 'center' | 'right';
    titleVariant?: TBgTitleVariants;
    textVariant?: TBgTextVariants;
    btnVariant?: TButtonVariant;
    imagePriority?: boolean;
}) => {
    const [isInViewport, setIsInViewport] = useState(false);

    return (
        <motion.section
            onViewportEnter={() => setIsInViewport(true)}
            onViewportLeave={() => setIsInViewport(false)}
            className={classNames('c-herobanner__slide relative', 'flex flex-col justify-center', 'h-screen py-28')}>
            {/* image */}
            <div className={'absolute inset-0 z-10 overflow-hidden'}>
                <motion.div
                    className="h-full w-full"
                    variants={motionImageVariants}
                    animate={isInViewport ? 'animate' : 'base'}>
                    <Image
                        fill
                        src={imgsrc}
                        alt={''}
                        className="object-cover"
                        priority={imagePriority}
                        placeholder="blur"
                    />

                    <div className="absolute inset-0 z-20" />
                </motion.div>

                {/*<div className="bg-black opacity-20 absolute inset-0" />*/}
            </div>

            {/* text */}
            <div className={classNames('relative z-30')}>
                <Container>
                    <div className="grid grid-cols-6">
                        <div className={classNames('col-span-6 col-start-1 text-center')}>
                            <motion.div
                                initial="base"
                                variants={motionTitleVariants}
                                animate={isInViewport ? 'animate' : 'base'}>
                                <BgTitle variant={titleVariant}>{title}</BgTitle>
                            </motion.div>

                            {text && (
                                <div className="mt-2">
                                    <BgText variant={textVariant} text={text} />
                                </div>
                            )}

                            {ctaUrl && ctaText && (
                                <div className="mt-6">
                                    <Button variant={btnVariant} href={ctaUrl}>
                                        {ctaText}
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                </Container>
            </div>
        </motion.section>
    );
};
