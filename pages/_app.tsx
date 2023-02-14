import '@/styles/global.css';
import type { AppProps } from 'next/app';
import { Exo_2, Playfair_Display, Abril_Fatface } from '@next/font/google';
import { SplashScreen } from '@/components/SplashScreen';
import { useEffect, useState } from 'react';
import classNames from 'classnames';

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
const fontAbril = Abril_Fatface({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-abril',
});

export default function App({ Component, pageProps }: AppProps) {
    const [pageIsLoaded, setPageIsLoaded] = useState(false);

    useEffect(() => {
        setPageIsLoaded(true);
    }, []);

    return (
        <div className={`${fontExo2.variable} ${fontPlayfair.variable} ${fontAbril.variable} c-app`}>
            <SplashScreen pageIsLoaded={pageIsLoaded} />
            <Component {...pageProps} />
        </div>
    );
}
