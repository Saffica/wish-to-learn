import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { UserMenuButton } from './UserMenuButton';
import { UserMenuPopup } from './UserMunuPopup';
import myPhoto from '../../../../imgs/myPhoto.svg';
import style from './UserMenu.module.css';

export const UserMenu = ({ isAuthorized }) => {
    const userInfo = 'Максим Сушко';
    const userPhoto = myPhoto;
    const userMenu = [
        { title: 'План обучения', link: 'courses', id: 1 },
        { title: 'Перейти в профиль', link: 'profile', id: 2 },
        { title: 'Выйти из профиля', link: 'login', id: 3 },
    ];

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const closePopup = () => setIsPopupOpen(false);
    const handlePopup = () => setIsPopupOpen(!isPopupOpen);

    useEffect(() => {
        document.addEventListener('click', closePopup);
        return () => document.removeEventListener('click', closePopup);
    }, [isPopupOpen]);

    return (
        <div
            className={style.user}
            onClick={element => element.stopPropagation()}>
            {isAuthorized ? (
                <UserMenuButton
                    handlePopup={handlePopup}
                    photo={userPhoto}
                />
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
