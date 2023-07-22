import { NavLink } from 'react-router-dom';
import { BiHomeCircle } from 'react-icons/bi';
import { FaListUl } from 'react-icons/fa';
import { GrUserSettings } from 'react-icons/gr';
import { IoMdExit } from 'react-icons/io';
import styles from './menu.module.scss';

export const Menu: React.FunctionComponent<IMenuProps> = ({ isOpen, onClick }) => {

    return (
        <div className={isOpen ? `${styles.menu} ${styles.open}` : styles.menu} >
            <ul className={styles.list}>
                <li className={styles.item}><span><BiHomeCircle /></span> <NavLink to='/' onClick={onClick}>Главная</NavLink></li>
                <li className={styles.item}><span><FaListUl /></span> <NavLink to='courses' onClick={onClick}>Список планов</NavLink></li>
                <li className={styles.item}><span><GrUserSettings /></span> <NavLink to='profile' onClick={onClick}>Настройки профиля</NavLink></li>
                <li className={styles.item}><span><IoMdExit /></span><NavLink to='/' onClick={onClick}>Выйти</NavLink></li>
            </ul>
        </div>
    )
}
