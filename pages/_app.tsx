import '@/styles/global.css';
import type { AppProps } from 'next/app';
import { Exo_2, Playfair_Display, Abril_Fatface, Montserrat, Oswald } from '@next/font/google';
import { SplashScreen } from '@/components/SplashScreen';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { AnimatePresence } from 'framer-motion';

const fontExo2 = Exo_2({
    weight: ['100', '200', '300', '800'],
    subsets: ['latin'],
    variable: '--font-exo2',
});
const fontPlayfair = Playfair_Display({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: '--font-playfair',
});
const fontMontserrat = Montserrat({
    weight: ['200', '300', '700'],
    subsets: ['latin'],
    variable: '--font-montserrat',
});

const fontOswals = Oswald({
    weight: ['300', '400'],
    subsets: ['latin'],
    variable: '--font-oswald',
});

export default function App({ Component, pageProps, router }: AppProps) {
    const [pageIsLoaded, setPageIsLoaded] = useState(false);

    useEffect(() => {
        setPageIsLoaded(true);
    }, []);

    return (
        <div
            className={`${fontExo2.variable} ${fontPlayfair.variable} ${fontMontserrat.variable} ${fontOswals.variable} c-app`}>
            <SplashScreen pageIsLoaded={pageIsLoaded} />
            <AnimatePresence
                mode="wait"
                onExitComplete={() => {
                    window.setTimeout(() => {
                        window.scrollTo(0, 0);
                    }, 100);
                }}>
                <Component {...pageProps} key={router.asPath} />
            </AnimatePresence>
        </div>
    );
}
