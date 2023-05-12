import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css';

export const Navbar = () => {

    const items = [
        { title: 'Главная', link: '/', id: '1' },
        { title: 'Список планов', link: 'courses', id: '2' }
    ]

    return (
        <div className={s.navbar}>{
            <ul className={s.list}>
                {items.map(({ title, link, id }) => <li className={s.item} key={id}>
                    <NavLink
                        to={link}
                        className={({ isActive }) => isActive ? s.active : ''}
                    >{title}
                    </NavLink>
                </li>
                )}
            </ul>
        }</div>
    )
}