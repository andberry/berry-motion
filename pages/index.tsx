import Head from "next/head";
import { Container } from "@/components/Container";
import { Layout } from "@/components/Layout";

export default function Home() {
    return (
        <>
            <Head>
                <title>Berry Motion</title>
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
                <Container>
                    <h1>This is the main title in layout</h1>
                </Container>
            </Layout>
        </>
    );
}
