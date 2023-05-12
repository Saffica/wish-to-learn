import React from 'react';
import { Logo } from './Logo/Logo';
import { User } from './User/User';
import { Navbar } from './Navbar/Navbar';
import './Header.css';

export const Header = () => {
    const isAuthorized = true;

    return (
        <header>
            <div className='header__wrapper'>
                <Logo />
                <Navbar />
                <User isAuthorized={isAuthorized} />
            </div>
        </header>
    )
}