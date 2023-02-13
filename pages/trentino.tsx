import Head from 'next/head';
import { Container } from '@/components/Container';
import { Layout } from '@/components/Layout';
import { Hero } from '@/components/Hero';
import { Cards } from '@/components/Cards';
import { CinemaHero } from '@/components/CinemaHero';
import { Gallery } from '@/components/Gallery';
import { Gallery2 } from '@/components/Gallery2';
import { ImageText } from '@/components/ImageText';

export default function Home() {
    return (
        <>
            <Head>
                <title>Trentino</title>
                <meta name="description" content="Framer Motion animations showcase by Berry" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <CinemaHero imgsrc="/images/trentino/6.jpg" title="Destination Trentino" />
                <Cards
                    title="Follow your passions"
                    cards={[
                        {
                            title: 'Hiking',
                            image: '/images/trentino/1.jpg',
                            ctaUrl: '#',
                            ctaText: 'Read More',
                        },
                        {
                            title: 'Food',
                            image: '/images/misc/food2.jpg',
                            ctaUrl: '#',
                            ctaText: 'Read More',
                        },
                        {
                            title: 'Trekking',
                            image: '/images/trentino/3.jpg',
                            ctaUrl: '#',
                            ctaText: 'Read More',
                        },
                        {
                            title: 'Kayaking',
                            image: '/images/trentino/2.jpg',
                            ctaUrl: '#',
                            ctaText: 'Read More',
                        },
                    ]}
                />
                <Hero imgsrc="/images/trentino/5.jpg" title="Destination Trentino" variant="right" />
                <ImageText
                    imgsrc="/images/misc/food1.jpg"
                    title="Can I treat you..."
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
                <ImageText
                    imgsrc="/images/misc/food2.jpg"
                    title="... with delicious food?"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    imgposition="right"
                />
                <Gallery
                    title="A few pics"
                    images={['/images/trentino/1.jpg', '/images/trentino/4.jpg', '/images/trentino/3.jpg']}
                />
                <Hero imgsrc="/images/trentino/1.jpg" title="Destination Trentino" variant="left" />
                <Gallery
                    title="A few pics"
                    images={['/images/trentino/7.jpg', '/images/trentino/2.jpg', '/images/trentino/5.jpg']}
                    hoverType="bw"
                />
                <Hero imgsrc="/images/trentino/2.jpg" title="Destination Trentino" variant="right" />
                <Gallery2
                    title="A few pics - Gallery 2"
                    images={[
                        '/images/trentino/7.jpg',
                        '/images/trentino/2.jpg',
                        '/images/trentino/5.jpg',
                        '/images/trentino/4.jpg',
                    ]}
                />
                <Hero
                    imgsrc="/images/trentino/7.jpg"
                    title="Destination Trentino"
                    variant="right"
                    ctaText="Discover Trentino"
                    ctaUrl="#"
                    titleVariant="black"
                    btnVariant="white"
                />
            </Layout>
        </>
    );
}
