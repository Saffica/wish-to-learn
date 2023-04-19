import React from 'react';
import { NavBarItem } from './NavBarItem';
import './NavBar.css';


export const NavBar = (props) => {

    const navbarItems = (() => {
        return !props?.navbarItems || !props.navbarItems.length
            ? [
                { title: 'Курс', link: 'course' },
                { title: 'Курсы', link: 'courses' },
                { title: 'План обучения', link: 'plan_list' },
                { title: 'О нас', link: 'about' },
            ]
            : props.navbarItems
    })()

    return (
        <nav
            className='nav-bar-items'
        >
            {navbarItems.map(item => <NavBarItem title={item.title} link={item.link} />)}
        </nav>
    );
};