import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { UserMenuButton } from './UserMenuButton';
import { UserMenuPopup } from './UserMunuPopup';
import style from './UserMenu.module.css';

export const UserMenu = ({ isAuthorized }) => {
    const userInfo = 'Максим Сушко';
    const userMenu = [
        { title: 'План обучения', link: 'courses', id: 1 },
        { title: 'Перейти в профиль', link: 'profile', id: 2 },
        { title: 'Выйти из профиля', link: 'login', id: 3 },
    ];

    const [isPopupOpen, setIsPopupOpen] = useState(false);


    return (
        <div
            className={style.user}
            onClick={element => element.stopPropagation()}>
            {isAuthorized ? (
                <UserMenuButton setIsPopupOpen={setIsPopupOpen} isOpen={isPopupOpen}/>
            ) : (
                <NavLink
                    className={({ isActive }) => (isActive ? `${style.link} ${style.active}` : style.link)}
                    to='login'>
                    Войти
                </NavLink>
            )}
            {!isAuthorized ? (
                ''
            ) : (
                <UserMenuPopup
                    menu={userMenu}
                    info={userInfo}
                    isOpen={isPopupOpen}
                />
            )}
        </div>
    );
};
