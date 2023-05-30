import { NavLink } from 'react-router-dom';
import { BiHomeCircle } from 'react-icons/bi';
import { FaListUl } from 'react-icons/fa';
import { GrUserSettings } from 'react-icons/gr';
import { IoMdExit } from 'react-icons/io';
import { useEffect } from 'react';
import classes from './menu.module.scss';

export const Menu: React.FunctionComponent<IMenuProps> = ({ isOpen, onClick }) => {

    useEffect(() => {
        const mainElement: HTMLElement | null = document.querySelector('main');
        if (!mainElement) {
            return;
        }
        if (isOpen) {
            setTimeout(() => {
                mainElement.style.height = 'calc(100vh - 146px)';
                mainElement.style.overflowY = 'hidden';
            }, 500)

            return;
        }
        mainElement.style.height = ''
        mainElement.style.overflowY = '';

    }, [isOpen]);

    return (
        <div className={isOpen ? `${classes.menu} ${classes.open}` : classes.menu}>
            <ul className={classes.list}>
                <li className={classes.item}><span><BiHomeCircle /></span> <NavLink to='/' onClick={onClick}>Главная</NavLink></li>
                <li className={classes.item}><span><FaListUl /></span> <NavLink to='courses' onClick={onClick}>Список планов</NavLink></li>
                <li className={classes.item}><span><GrUserSettings /></span> <NavLink to='profile' onClick={onClick}>Настройки профиля</NavLink></li>
                <li className={classes.item}><span><IoMdExit /></span><NavLink to='/' onClick={onClick}>Выйти</NavLink></li>
            </ul>
        </div>
    )
}
