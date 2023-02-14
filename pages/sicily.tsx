import Head from 'next/head';
import { Container } from '@/components/Container';
import { Layout } from '@/components/Layout';
import { Hero } from '@/components/Hero';
import { CinemaHero } from '@/components/CinemaHero';
import { Cards } from '@/components/Cards';
import { Gallery } from '@/components/Gallery';
import { Gallery2 } from '@/components/Gallery2';
import Image1 from '../public/images/sicily/5.jpg';
import Image2 from '../public/images/sicily/2.jpg';
import Image3 from '../public/images/sicily/1.jpg';
import Image4 from '../public/images/sicily/3.jpg';
import Image5 from '../public/images/sicily/4.jpg';

export default function Home() {
    return (
        <>
            <Head>
                <title>sicily</title>
                <meta name="description" content="Framer Motion animations showcase by Berry" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <CinemaHero imgsrc={Image1} title="Destination sicily" />
                <Cards
                    title="Enjoy a slice of paradise"
                    type="type2"
                    cards={[
                        {
                            title: 'Beautiful sunsets',
                            image: '/images/sicily/1.jpg',
                            ctaUrl: '#',
                            ctaText: 'Read More',
                        },
                        {
                            title: 'Delicious seafood',
                            image: '/images/misc/food3.jpg',
                            ctaUrl: '#',
                            ctaText: 'Read More',
                        },
                        {
                            title: 'Stunning views',
                            image: '/images/sicily/3.jpg',
                            ctaUrl: '#',
                            ctaText: 'Read More',
                        },
                        {
                            title: 'Gorgeous beaches',
                            image: '/images/sicily/2.jpg',
                            ctaUrl: '#',
                            ctaText: 'Read More',
                        },
                    ]}
                />
                <Hero
                    imgsrc={Image2}
                    title="Destination sicily"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    ctaText="Find out more"
                    ctaUrl="#"
                    titleVariant="black"
                    textVariant="black"
                    btnVariant="verb"
                    variant="right"
                />
                <Gallery
                    title="A few pics"
                    images={[
                        '/images/sicily/1.jpg',
                        '/images/sicily/4.jpg',
                        '/images/sicily/3.jpg',
                        '/images/sicily/2.jpg',
                        '/images/sicily/5.jpg',
                        '/images/sicily/6.jpg',
                    ]}
                    hoverType="bw"
                />
                <Hero
                    imgsrc={Image3}
                    title="Destination sicily"
                    variant="left"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    ctaText="Find out More"
                    ctaUrl="#"
                    btnVariant="verb"
                />
                <Gallery2
                    title="A few pics - Gallery 2"
                    images={[
                        '/images/sicily/6.jpg',
                        '/images/sicily/2.jpg',
                        '/images/sicily/5.jpg',
                        '/images/sicily/4.jpg',
                    ]}
                />

                <Hero
                    imgsrc={Image4}
                    title="Destination sicily"
                    ctaText="Find out more"
                    ctaUrl="#"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    btnVariant="white"
                />
            </Layout>
        </>
    );
}
