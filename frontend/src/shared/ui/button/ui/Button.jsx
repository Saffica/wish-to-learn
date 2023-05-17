import React from 'react';
import classes from './Button.module.css';

export const Button = ({
    width,
    height,
    color,
    onClick,
    backgroundColor,
    title
}) => {
    return <button
        style={{
            width, height, color, backgroundColor
        }} onClick={onClick}
        className={classes.btn}>
        {title}
    </button>
}