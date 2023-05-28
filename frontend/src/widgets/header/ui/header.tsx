import { useVersion } from '../lib/use-version';
import { Navigation, Authorization, OpenProfileSettings, Menu } from '../../../features';
import { Logo, BurgerButton } from '../../../shared';
import classes from './header.module.scss';
import { useState } from 'react';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isMobileVersion = useVersion();
    const handleMenu = () => {
        console.log(isMenuOpen)
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className={classes.header}>
            <div className={classes.wrapper}>
                <Logo />
                {isMobileVersion || <Navigation />}
                {isMobileVersion || <Authorization />}
                {isMobileVersion || <OpenProfileSettings />}
                {!isMobileVersion || <BurgerButton onClick={handleMenu} />}
                {!isMenuOpen || <Menu />}
            </div>
        </div>
    );
};
