import { NavLink } from 'react-router-dom';
import { HeaderLink } from '../../../shared';
import profileIconPath from '../lib/imgs/profile.png';
import classes from './user.module.css';

export const User = () => {
    const isAuthorized = false;

    return (
        <div className={classes.user}>
            {isAuthorized
                ? <HeaderLink link='/' title='Выйти' />
                : <HeaderLink link='login' title='Войти' />
            }
            {isAuthorized
                ? <NavLink to='profile'><img src='#' alt="profile" /></NavLink>
                : <NavLink to='login'><img src={profileIconPath} alt="profile" /></NavLink>
            }
        </div >
    );
};
