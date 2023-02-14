import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="font-montserrat">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};
