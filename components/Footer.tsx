import { Container } from "./Container";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="c-page-footer py-4 text-black bg-white uppercase text-sm">
            <Container>
                Implemented with <Link href="https://nextjs.org/">Next.js</Link>
                , <Link href="https://tailwindcss.com/">TailwindCSS</Link>,{" "}
                <Link href="https://www.framer.com/motion/">Framer Motion</Link>{" "}
                and 💜 by{" "}
                <a href="mailto:andrea.berardi@verbinteractive.com">Berry</a> 💋
            </Container>
        </footer>
    );
};
