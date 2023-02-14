import Head from 'next/head';
import { Container } from '@/components/Container';
import { Layout } from '@/components/Layout';
import { Hero } from '@/components/Hero';
import HeroImage from '../public/images/misc/italy.jpg';
import { Cards } from '@/components/Cards';

export default function Home() {
    return (
        <>
            <Head>
                <title>Berry Motion</title>
                <meta name="description" content="Framer Motion animations showcase by Berry" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <Hero imgsrc={HeroImage} title="Destination Berryland" variant="center" />
                <Cards
                    title="Welcome to Italy"
                    cards={[
                        {
                            title: 'Trentino',
                            image: '/images/trentino/6.jpg',
                            ctaUrl: '/trentino',
                            ctaText: 'Read More',
                        },
                        {
                            title: 'Tuscany',
                            image: '/images/tuscany/2.jpg',
                            ctaUrl: '/tuscany',
                            ctaText: 'Read More',
                        },
                        {
                            title: 'Sicily',
                            image: '/images/sicily/1.jpg',
                            ctaUrl: '/sicily',
                            ctaText: 'Read More',
                        },
                    ]}
                />
            </Layout>
        </>
    );
}
