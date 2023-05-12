import React from "react";
import { NavLink } from 'react-router-dom';
import logoImg from '../../../../imgs/logo.svg';
import s from './Logo.module.css';

export const Logo = () => {
    return (
        <div className={s.logo}>
            <NavLink to='/'>
                <img src={logoImg} alt="logo" />
            </NavLink>
        </div>
    )
}