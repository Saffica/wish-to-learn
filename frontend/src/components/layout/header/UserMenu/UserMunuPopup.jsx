import React from "react";
import { NavLink } from 'react-router-dom';
import style from './UserMunuPopup.module.css';

export const UserMenuPopup = ({ menu, info, isOpen }) => {
    return (
        <div className={`${style.popup} ${style[isOpen ? 'open' : 'closed']}`}>
            <div className={style.info}>{info}</div>
            <ul className={style.items}>
                {
                    menu.map(({ title, link, id }) => {
                        return <li className={style.item} key={id}>
                            <NavLink
                                className={({ isActive }) => isActive ? `${style.link} ${style.active}` : style.link}
                                to={link}>
                                {title}
                            </NavLink>
                        </li>
                    })
                }
            </ul>
        </div >
    )
}