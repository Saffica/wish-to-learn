import { NavLink } from 'react-router-dom';
import { BiHomeCircle } from 'react-icons/bi';
import { FaListUl } from 'react-icons/fa';
import { GrUserSettings } from 'react-icons/gr';
import { IoMdExit } from 'react-icons/io';
import classes from './menu.module.scss';

export const Menu: React.FunctionComponent = () => {
    return (
        <div className={classes.menu}>
            <ul className={classes.list}>
                <li className={classes.item}><span><BiHomeCircle /></span> <NavLink to='/'>Главная</NavLink></li>
                <li className={classes.item}><span><FaListUl /></span> <NavLink to='courses'>Список планов</NavLink></li>
                <li className={classes.item}><span><GrUserSettings /></span> <NavLink to='profile'>Настройки профиля</NavLink></li>
                <li className={classes.item}><span><IoMdExit /></span><NavLink to='/'>Выйти</NavLink></li>
            </ul>
        </div>
    )
}

