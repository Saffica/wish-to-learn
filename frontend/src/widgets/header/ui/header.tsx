import { Navigation, Authorization, OpenProfileSettings, Menu } from '../../../features';
import { Logo, BurgerButton } from '../../../shared';
import { useState, useEffect } from 'react';
import classes from './header.module.scss';

export const Header: React.FunctionComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [format, setFormat] = useState<boolean | undefined>();

    useEffect(() => {
        const isMobile = () => window.innerWidth < 768;
        setFormat(() => isMobile());

        const handleSubscribe = () => setFormat(() => isMobile());
        window.addEventListener('resize', handleSubscribe);

        return () => window.removeEventListener('resize', handleSubscribe);
    }, []);

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
