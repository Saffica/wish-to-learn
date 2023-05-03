import React from "react";
import { NavLink } from 'react-router-dom';
import style from './Logo.module.css';

export const Logo = () => {
    return (
        <NavLink
            className={style.logo}
            to='/'
        >
        </NavLink>
    )
}