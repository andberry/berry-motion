import Head from "next/head";
import { Container } from "@/components/Container";
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";

export default function Home() {
    return (
        <>
            <Head>
                <title>Tuscany</title>
                <meta
                    name="description"
                    content="Framer Motion animations showcase by Berry"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <Hero
                    imgsrc="/images/Tuscany/1.jpg"
                    title="Destination Tuscany"
                />
                <Hero
                    imgsrc="/images/Tuscany/2.jpg"
                    title="Destination Tuscany"
                />
                <Hero
                    imgsrc="/images/Tuscany/3.jpg"
                    title="Destination Tuscany"
                />
                <Hero
                    imgsrc="/images/Tuscany/4.jpg"
                    title="Destination Tuscany"
                />
                <Hero
                    imgsrc="/images/Tuscany/5.jpg"
                    title="Destination Tuscany"
                />
            </Layout>
        </>
    );
}
