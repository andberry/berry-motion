import BerryImg from '../public/images/misc/berry.svg';
import BerryLand from '../public/images/misc/welcome-to-berryland.svg';
import { ComponentPropsWithoutRef } from 'react';
import classNames from 'classnames';
import Image from 'next/image';

interface ISplashScreen extends ComponentPropsWithoutRef<'div'> {
    pageIsLoaded: boolean;
}

export const SplashScreen = ({ className, pageIsLoaded }: ISplashScreen) => {
    return (
        <div
            className={classNames(
                'fixed z-50 h-screen w-screen bg-black text-white flex items-center justify-center',
                className,
                'transition-all duration-700 ease-linear delay-1000',
                { 'opacity-100': !pageIsLoaded },
                { 'opacity-0 pointer-events-none': pageIsLoaded }
            )}>
            <div className="w-full max-w-screen-lg">
                <Image
                    src={BerryLand}
                    alt=""
                    className={classNames(
                        'transition-all duration-500 ease-linear delay-500',
                        { 'opacity-100': !pageIsLoaded },
                        { 'opacity-0 pointer-events-none': pageIsLoaded }
                    )}
                />
            </div>
        </div>
    );
};
