import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './HeaderLink.module.css';

export const HeaderLink = (props) => {
    return (
        <NavLink
            to={props.link}
            className={classes.headerLink}
        >{props.title}
        </NavLink>
    )
}