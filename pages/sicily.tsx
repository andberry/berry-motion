import Head from "next/head";
import { Container } from "@/components/Container";
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { CinemaHero } from "@/components/CinemaHero";
import { Cards } from "@/components/Cards";

export default function Home() {
    return (
        <>
            <Head>
                <title>sicily</title>
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
                <CinemaHero
                    imgsrc="/images/sicily/5.jpg"
                    title="Destination sicily"
                />
                <Cards
                    title="Enjoy a slice of paradise"
                    type="type2"
                    cards={[
                        {
                            title: "Beautiful sunsets",
                            image: "/images/sicily/1.jpg",
                            ctaUrl: "#",
                            ctaText: "Read More",
                        },
                        {
                            title: "Delicious seafood",
                            image: "/images/misc/food3.jpg",
                            ctaUrl: "#",
                            ctaText: "Read More",
                        },
                        {
                            title: "Stunning views",
                            image: "/images/sicily/3.jpg",
                            ctaUrl: "#",
                            ctaText: "Read More",
                        },
                        {
                            title: "Gorgeous beaches",
                            image: "/images/sicily/2.jpg",
                            ctaUrl: "#",
                            ctaText: "Read More",
                        },
                    ]}
                />
                <Hero
                    imgsrc="/images/sicily/2.jpg"
                    title="Destination sicily"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    ctaText="Find out more"
                    ctaUrl="#"
                    titleVariant="black"
                    textVariant="black"
                    btnVariant="verb"
                    variant="right"
                />
                <Hero
                    imgsrc="/images/sicily/1.jpg"
                    title="Destination sicily"
                    variant="left"
                />

                <Hero
                    imgsrc="/images/sicily/3.jpg"
                    title="Destination sicily"
                    ctaText="Find out more"
                    ctaUrl="#"
                />
                <Hero
                    imgsrc="/images/sicily/4.jpg"
                    title="Destination sicily"
                />
            </Layout>
        </>
    );
}
