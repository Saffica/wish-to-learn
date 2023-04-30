import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';

export const Navbar = ({ items }) => {
    return (
        <nav
            className={style.navbar}
        >
            <ul className={style.items}>
                {items.length
                    ? items.map(({ link, title, id }) => {
                        return <li className={style.item} key={id}>
                            <NavLink
                                className={({ isActive }) => isActive ? `${style.link} ${style.active}` : style.link}
                                to={link}>
                                {title}
                            </NavLink>
                        </li>
                    })
                    : ''
                }
            </ul>
        </nav>
    );
};