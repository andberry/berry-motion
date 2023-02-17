import Image from 'next/image';
import { Container } from './Container';
import { AnimatePresence, motion, Variant } from 'framer-motion';
import { easings } from '@/utils/easings';
import { useState } from 'react';
import classNames from 'classnames';
import { Modal } from './Modal';

interface IGallery2 {
    title: string;
    images: string[];
}

const sectionVariants: { [key: string]: Variant } = {
    hide: {},
    show: {
        transition: {
            staggerChildren: 0.06,
        },
    },
};

export function Gallery2({ title, images }: IGallery2) {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    return (
        <section className="py-40 relative">
            <Container>
                <h2 className={`font-playfair uppercase text-left text-5xl`}>{title}</h2>
                <div className={classNames('mt-8', 'md:grid md:grid-cols-4 md:gap-8 relative')}>
                    {images.map((item, index) => {
                        return (
                            <motion.div
                                key={index}
                                className={classNames('mb-6 md:mb-0', 'aspect-10/16', 'relative overflow-hidde', {
                                    'opacity-20': selectedImage && selectedImage !== index,
                                })}
                                layout
                                onClick={() => {
                                    selectedImage ? setSelectedImage(null) : setSelectedImage(index);
                                }}>
                                <div className="relative h-full overflow-hidden">
                                    <div className="aspect-video h-full absolute top-0 left-1/2 -translate-x-1/2">
                                        <Image
                                            fill
                                            src={item}
                                            alt=""
                                            sizes="(max-width: 767px) 100vw,
                                                (max-width: 1023px) 50vw,
                                                30vw"
                                            className={classNames('object-cover object-center')}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </Container>
            <Modal title="Gallery2">Not properly implemented yet</Modal>
        </section>
    );
}
