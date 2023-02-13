import classNames from "classnames";
import { motion, useTransform, MotionValue, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { Container } from "./Container";
import { Button } from "./Button";
import { BgTitle } from "./BgTitle";
import { TBgTitleVariants } from "./BgTitle";
import { BgText } from "./BgText";
import { TBgTextVariants } from "./BgText";
import { TButtonVariant } from "./Button";
import { easings } from "@/utils/easings";

const useBgScaleParallax = (value: MotionValue<number>) =>
    useTransform(value, [0, 0.75, 1], [1, 1.1, 1.15]);
const useBgOverlayOpacityParallax = (value: MotionValue<number>) =>
    useTransform(value, [0, 0.5, 1], [0, 0.4, 0.8]);
const useBgBlurParallax = (value: MotionValue<number>) =>
    useTransform(value, (value) => {
        return value > 0.4 ? `blur(${value * 4}px)` : `blur(${value * 1.5}px)`;
    });

const motionContentVariants = {
    hide: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            type: "tween",
            ease: easings.easeOutExpo,
            duration: 1.6,
            delay: 0.3,
        },
    },
};

export const Hero = ({
    imgsrc,
    title,
    text,
    ctaUrl,
    ctaText,
    variant = "center",
    titleVariant = "white",
    textVariant = "white",
    btnVariant = "black",
}: {
    imgsrc: string;
    title: string;
    text?: string;
    ctaUrl?: string;
    ctaText?: string;
    variant?: "left" | "center" | "right";
    titleVariant?: TBgTitleVariants;
    textVariant?: TBgTextVariants;
    btnVariant?: TButtonVariant;
}) => {
    const bgRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: bgRef,
        offset: ["center center", "end start"],
    });
    const bgScaleParallax = useBgScaleParallax(scrollYProgress);
    const bgOverlayOpacityParallax =
        useBgOverlayOpacityParallax(scrollYProgress);
    const bgBlurParallax = useBgBlurParallax(scrollYProgress);

    const [isInViewportAnimating, setIsInViewportAnimating] = useState(false);

    return (
        <motion.section
            className={classNames(
                "c-herobanner__slide relative",
                "flex flex-col justify-end",
                "aspect-video pb-16"
            )}
            onViewportEnter={() => setIsInViewportAnimating(true)}
            onViewportLeave={() => setIsInViewportAnimating(false)}
            viewport={{ amount: 0.5, margin: "0px 0px -200px 0px" }}
        >
            <div
                ref={bgRef}
                className={"absolute inset-0 z-10 overflow-hidden"}
            >
                <motion.div
                    style={{ scale: bgScaleParallax, filter: bgBlurParallax }}
                    className="h-full w-full"
                >
                    <Image
                        fill
                        src={imgsrc}
                        alt={""}
                        className="object-cover"
                        priority
                    />

                    <div className="absolute inset-0 z-20" />
                </motion.div>

                <motion.div
                    style={{ opacity: bgOverlayOpacityParallax }}
                    className="bg-black absolute inset-0"
                />
            </div>

            <div className={classNames("relative z-30")}>
                <Container>
                    <div className="grid grid-cols-6">
                        <div
                            className={classNames(
                                "col-span-4",
                                { "col-start-1": variant === "left" },
                                { "col-start-2": variant === "center" },
                                { "col-start-3": variant === "right" },
                                { "text-center": variant === "center" },
                                { "text-right": variant === "right" }
                            )}
                        >
                            <motion.div
                                animate={
                                    isInViewportAnimating ? "show" : "hide"
                                }
                                initial="hide"
                                variants={motionContentVariants}
                            >
                                <BgTitle variant={titleVariant}>
                                    {title}
                                </BgTitle>

                                {text && (
                                    <div className="mt-2">
                                        <BgText
                                            variant={textVariant}
                                            text={text}
                                        />
                                    </div>
                                )}

                                {ctaUrl && ctaText && (
                                    <div className="mt-6">
                                        <Button
                                            variant={btnVariant}
                                            href={ctaUrl}
                                        >
                                            {ctaText}
                                        </Button>
                                    </div>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </Container>
            </div>
        </motion.section>
    );
};
