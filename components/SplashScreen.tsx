import { ComponentPropsWithoutRef } from 'react';
import classNames from 'classnames';
interface ISplashScreen extends ComponentPropsWithoutRef<'div'> {}
export const SplashScreen = ({ className }: ISplashScreen) => {
    return (
        <div
            className={classNames(
                'fixed z-50 h-screen w-screen bg-black text-verb flex items-center justify-center',
                className
            )}>
            <h1 className="text-6xl text-center uppercase">This is the Splash Screen</h1>
        </div>
    );
};
