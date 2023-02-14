import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { PageTransitionLayout } from './PageTransitionLayout';

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <PageTransitionLayout>
            <div className="font-montserrat">
                <Header />
                <main>{children}</main>
                <Footer />
            </div>
        </PageTransitionLayout>
    );
};
