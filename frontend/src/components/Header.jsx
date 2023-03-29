import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = (props) => {

    const navbarItems = (() => {
        return !props?.navbarItems || !props.navbarItems.length
            ? [
                { title: 'список планов', link: '/courses' },
                { title: 'о нас', link: '/' },
            ]
            : props.navbarItems
    })()

    return (
        <div
            className='header'>
            <div
                className='container'>
                <div className='header__logo header-logo'>
                    <Link to='/'>
                        <img
                            className='header-logo__img'
                            src='/logo.png'
                            alt='Logo'
                        />
                    </Link>
                </div>
                <nav
                    className='header__navbar header-navbar'
                >
                    <div
                        className='header-navbar__items'
                    >
                        {navbarItems.map(({ title, link }) => <Link
                            className='header-navbar__item'
                            to={link}>
                            {title}
                        </Link>
                        )}
                    </div>
                </nav>
                <div className='header__login header-login'>
                    <div className="header-login__button">
                        <button>{props.user ? 'Выйти' : 'Войти'}</button>
                    </div>
                    <div className="header-login__user-icon">
                        <img
                            src={props.user ? props.user.icon : '/profile.png'}
                            alt='profile icon'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};