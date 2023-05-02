import React from 'react';
import { useState, useEffect } from 'react';
import style from './UserMenuButton.module.css';

export const UserMenuButton = ({ setIsPopupOpen, isOpen }) => {
    const [isActive, setIsActive] = useState(false);
    const closePopup = () => {
        setIsPopupOpen(false);
        setIsActive(false);
    }

    useEffect(() => {
        document.addEventListener('click', closePopup);
        return () => document.removeEventListener('click', closePopup);
    }, [isActive]);

    return (
        <button
            className={style.burger}
            onClick={() => {
                setIsPopupOpen(!isOpen);
                setIsActive(!isActive);
            }}>
            <span className={isActive ? style.active : ''} />
        </button>
    );
};
