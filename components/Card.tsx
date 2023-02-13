import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./Button";
import { motion, Variant } from "framer-motion";
import { easings } from "@/utils/easings";

export type TCardAnimationType = "type1" | "type2";

export interface ICard {
    image: string;
    title: string;
    ctaText: string;
    ctaUrl: string;
    type?: TCardAnimationType;
}

const motionVariantsCard: { [key: string]: Variant } = {
    base: {},
    hover: {},
};

const motionVariantsImage: { [key: string]: Variant } = {
    base: {
        scale: 1.1,
        y: -10,
        transition: {
            type: "tween",
            ease: easings.easeOutQuint,
            duration: 0.6,
        },
    },
    hover: {
        scale: 1.15,
        y: -25,
        transition: {
            type: "tween",
            ease: easings.easeOutQuint,
            duration: 0.6,
        },
    },
};

const motionVariantsTitle1: { [key: string]: Variant } = {
    base: {
        opacity: 1,
        //y: 0,
    },
    hover: {
        opacity: 0,
        // y: -15,
        transition: {
            delay: 0,
        },
    },
};
const motionVariantsTitle2: { [key: string]: Variant } = {
    base: {
        opacity: 0,
        y: 0,
    },
    hover: {
        opacity: 1,
        y: -30,
        transition: {
            type: "tween",
            duration: 0.6,
            ease: easings.easeOutExpo,
            delay: 0.1,
        },
    },
};

export function Card({ image, title, ctaText, ctaUrl, type = "type1" }: ICard) {
    const [isHover, setIsHover] = useState(false);
    return (
        <motion.div
            onHoverStart={() => setIsHover(true)}
            onHoverEnd={() => setIsHover(false)}
            variants={motionVariantsCard}
            animate={isHover ? "hover" : "base"}
        >
            <Link href={ctaUrl} className="block relative p-4 group">
                <div className="relative pb-3 z-20">
                    <div className="aspect-10/16 rounded-md overflow-hidden relative z-30">
                        <motion.div
                            className="relative w-full h-full"
                            variants={motionVariantsImage}
                            animate={isHover ? "hover" : "base"}
                        >
                            <Image
                                fill
                                src={image}
                                alt=""
                                className="object-center object-cover"
                                sizes="(max-width: 767px) 100vw,
                                    (max-width: 1023px) 50vw,
                                    30vw"
                            />
                        </motion.div>
                    </div>

                    <motion.h3
                        animate={type === "type1" && isHover ? "hover" : "base"}
                        variants={motionVariantsTitle1}
                        className="text-xl text-center mt-2 text-black"
                    >
                        {title}
                    </motion.h3>
                    {type === "type1" && (
                        <motion.h3
                            animate={isHover ? "hover" : "base"}
                            variants={motionVariantsTitle2}
                            className="text-xl text-center mt-2 text-white"
                        >
                            {title}
                        </motion.h3>
                    )}
                </div>

                {isHover && type === "type1" && (
                    <motion.div
                        layoutId="hoverbox"
                        className="absolute inset-0 bg-black z-10 rounded-md"
                    ></motion.div>
                )}

                {isHover && type === "type2" && (
                    <motion.div
                        layoutId="hoverbox"
                        className="absolute left-0 right-0 bottom-0 h-3 bg-verb z-10 rounded-md"
                    ></motion.div>
                )}
            </Link>
        </motion.div>
    );
}
