import React from 'react';
import { Logo } from './Logo/Logo';
import { Navbar } from './Navbar/Navbar';
import { User } from './User/User';
import myPhoto from '../../imgs/myPhoto.svg';
import './Header.css';

export const Header = () => {
    const navbarItems = [
        { title: 'Курс', link: 'course', id: 1 },
        { title: 'Курсы', link: 'courses', id: 2 },
        { title: 'План обучения', link: 'plan_list', id: 3 },
        { title: 'О нас', link: 'about', id: 4 },
    ];

    const userInfo = {
        firstName: 'Максим',
        lastName: 'Сушко',
        photo: myPhoto,
    };

    const userMenu = [
        { title: 'Перейти в профиль', link: 'profile', id: 1 },
        { title: 'Выйти из профиля', link: '/', id: 2 },
    ];

    return (
        <header>
            <div className='header__wrapper'>
                <Logo />
                <Navbar items={navbarItems} />
                <User userInfo={userInfo} userMenu={userMenu} />
            </div>
        </header>
    )
}