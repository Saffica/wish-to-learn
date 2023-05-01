import React from 'react';
import { Logo } from './Logo/Logo';
import { UserMenu } from './UserMenu/UserMenu';
import './Header.css';

export const Header = () => {
    const isAuthorized = true;

    return (
        <header>
            <div className='header__wrapper'>
                <Logo />
                <UserMenu isAuthorized={isAuthorized} />
            </div>
        </header>
    )
}