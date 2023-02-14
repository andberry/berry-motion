import Head from 'next/head';
import { Container } from '@/components/Container';
import { Layout } from '@/components/Layout';
import { Hero } from '@/components/Hero';
import ImageHero from '../public/images/tuscany/2.jpg';
import { ImageText } from '@/components/ImageText';
import { Cards } from '@/components/Cards';
import { Gallery } from '@/components/Gallery';
import { CinemaHero } from '@/components/CinemaHero';
import Image1 from '../public/images/tuscany/1.jpg';
import Image3 from '../public/images/tuscany/3.jpg';
import Image4 from '../public/images/tuscany/4.jpg';
import Image5 from '../public/images/tuscany/5.jpg';

export default function Home() {
    return (
        <>
            <Head>
                <title>Tuscany</title>
                <meta name="description" content="Framer Motion animations showcase by Berry" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <CinemaHero imgsrc={ImageHero} title="Destination Tuscany" />
                <Cards
                    title="Follow your passions"
                    cards={[
                        {
                            title: 'Card1',
                            image: '/images/tuscany/1.jpg',
                            ctaUrl: '#',
                            ctaText: 'Read More',
                        },
                        {
                            title: 'Card2',
                            image: '/images/misc/food2.jpg',
                            ctaUrl: '#',
                            ctaText: 'Read More',
                        },
                        {
                            title: 'Card3',
                            image: '/images/tuscany/3.jpg',
                            ctaUrl: '#',
                            ctaText: 'Read More',
                        },
                        {
                            title: 'Card4',
                            image: '/images/tuscany/2.jpg',
                            ctaUrl: '#',
                            ctaText: 'Read More',
                        },
                    ]}
                />
                <Hero
                    imgsrc={Image1}
                    title="Destination Tuscany"
                    variant="right"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    ctaText="Find out More"
                    ctaUrl="#"
                    btnVariant="verb"
                />
                <ImageText
                    imgsrc="/images/misc/food5.jpg"
                    title="Can I treat you..."
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
                <ImageText
                    imgsrc="/images/misc/food8.jpg"
                    title="... with delicious food?"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    imgposition="right"
                />
                <Gallery
                    title="A few pics"
                    images={['/images/tuscany/1.jpg', '/images/tuscany/4.jpg', '/images/tuscany/3.jpg']}
                />

                <Hero
                    imgsrc={Image4}
                    title="Destination Tuscany"
                    variant="left"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    ctaText="Find out More"
                    ctaUrl="#"
                    btnVariant="black"
                />
            </Layout>
        </>
    );
}
