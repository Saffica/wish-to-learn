import React from 'react';
import { useState } from 'react';
import style from './UserMenuButton.module.css';

export const UserMenuButton = ({ handlePopup }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div
            className={style.burger}
            onClick={() => {
                handlePopup();
                setIsActive(!isActive);
            }}>
            <span className={isActive ? style.active : ''} />
        </div>
    );
};
