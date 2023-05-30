import { Navigation, Authorization, OpenProfileSettings, Menu } from '../../../features';
import { Logo, BurgerButton } from '../../../shared';
import { useState, useEffect } from 'react';
import classes from './header.module.scss';

export const Header = () => {
    const isMobile = () => {
        console.log(`${window.innerWidth} <= 991`);
        console.log(window.innerWidth <= 991)
        return window.innerWidth <= 991;
    }
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [format, setFormat] = useState(isMobile());
    console.log(format);

    useEffect(() => {
        const handleSubscribe = () => setFormat(isMobile());
        window.addEventListener('resize', handleSubscribe);

        return () => window.removeEventListener('resize', handleSubscribe);
    });

    const handleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className={classes.header}>
            <div className={classes.wrapper}>
                <Logo />
                {format || <Navigation />}
                {format || <Authorization />}
                {format || <OpenProfileSettings />}
                {!format || <BurgerButton isOpen={isMenuOpen} onClick={handleMenu} />}
                {!format || <Menu isOpen={isMenuOpen} onClick={handleMenu} />}
            </div>
        </div>
    );
};
