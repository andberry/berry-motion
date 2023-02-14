import Head from 'next/head';
import { Container } from '@/components/Container';
import { Layout } from '@/components/Layout';
import { Hero } from '@/components/Hero';
import ImageHero from '../public/images/tuscany/2.jpg';
import { CinemaHero } from '@/components/CinemaHero';
import Image1 from '../public/images/tuscany/1.jpg';
import Image2 from '../public/images/tuscany/2.jpg';
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
                <CinemaHero imgsrc={ImageHero} title="Destination Tuscany" imagePriority={true} />
                <Hero imgsrc={Image1} title="Destination Tuscany" />
                <Hero imgsrc={Image2} title="Destination Tuscany" />
                <Hero imgsrc={Image3} title="Destination Tuscany" />
                <Hero imgsrc={Image4} title="Destination Tuscany" />
                <Hero imgsrc={Image5} title="Destination Tuscany" />
            </Layout>
        </>
    );
}
