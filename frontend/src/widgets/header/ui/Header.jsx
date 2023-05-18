import React from 'react';
import { Logo, Navigation, User} from '../../../features';
import classes from './Header.module.css';

export const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.wrapper}>
                <Logo />
                <Navigation />
                <User />
            </div>
        </div>
    );
};
