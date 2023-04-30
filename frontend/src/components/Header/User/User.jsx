import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import defaultPhoto from '../../../imgs/defaultPhoto.svg';
import style from './User.module.css';

export const User = ({ userInfo, userMenu }) => {
    const { photo, firstName, lastName } = userInfo;
    const [popupState, setPopupState] = useState('closed');
    const popupHandle = () => setPopupState(popupState === 'closed' ? 'open' : 'closed');

    return (
        <div className={style.user}>
            <div className={style.button}>
                <button
                    style={{ backgroundImage: `url(${!photo || defaultPhoto})` }}
                    onClick={popupHandle}>
                </button>
            </div>
            <div className={`${style.popup} ${style[popupState]}`}>
                <div className={style.info}>{`${lastName} ${firstName}`}</div>
                <ul className={style.items}>
                    {userMenu.length
                        ? userMenu.map(({ title, link, id }) => {
                            return <li className={style.item} key={id}>
                                <NavLink
                                    className={({ isActive }) => isActive ? `${style.link} ${style.active}` : style.link}
                                    to={link}>
                                    {title}
                                </NavLink>
                            </li>
                        })
                        : ''
                    }
                </ul>
            </div >
            {popupState === 'closed'
                ? ''
                : <div className={style.blur} onClick={() => popupHandle('closed')}></div>
            }
        </div>
    )
}