import { NavLink } from 'react-router-dom';
import { BiHomeCircle } from 'react-icons/bi';
import { FaListUl } from 'react-icons/fa';
import { GrUserSettings } from 'react-icons/gr';
import { IoMdExit } from 'react-icons/io';
import { useEffect, useState } from 'react';
import classes from './menu.module.scss';

export const Menu: React.FunctionComponent<IMenuProps> = ({ isOpen, onClick }) => {
    const [height, setHeight] = useState<string | undefined>();
    const [display, setDisplay] = useState('none');

    useEffect(() => {
        const getHeight = () => {
            const bodyElement: HTMLElement | null = document.querySelector('body');
            if (!bodyElement) {
                return
            }

            return getComputedStyle(bodyElement).height;
        }

        setHeight(() => getHeight())
    }, []);

    useEffect(() => {
        isOpen ? setDisplay('block') : setTimeout(() => setDisplay('none'), 500);
    }, [isOpen])



    return (
        <div className={isOpen ? `${classes.menu} ${classes.open}` : classes.menu} style={{ 'height': height, 'display': display }}>
            <ul className={classes.list}>
                <li className={classes.item}><span><BiHomeCircle /></span> <NavLink to='/' onClick={onClick}>Главная</NavLink></li>
                <li className={classes.item}><span><FaListUl /></span> <NavLink to='courses' onClick={onClick}>Список планов</NavLink></li>
                <li className={classes.item}><span><GrUserSettings /></span> <NavLink to='profile' onClick={onClick}>Настройки профиля</NavLink></li>
                <li className={classes.item}><span><IoMdExit /></span><NavLink to='/' onClick={onClick}>Выйти</NavLink></li>
            </ul>
        </div>
    )
}
