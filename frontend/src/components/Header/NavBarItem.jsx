import React from "react";
import { NavLink } from "react-router-dom";
import './NavBarItem.css'

export const NavBarItem = ({ link, title }) => {
    return (
        <NavLink
            className={({ isActive }) => isActive ? 'nav-bar-item__active' : 'nav-bar-item'}
            to={link}>
            {title}
        </NavLink>
    )
}