import { NavLink } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';
import { HeaderLink } from '../../../shared';
import classes from './User.module.css';

export const User = () => {
    const isAuthorized = false;

    return (
        <div className={classes.user}>
            <div className={classes.link}>
                {isAuthorized
                    ? <HeaderLink link='/' title='Выйти' />
                    : <HeaderLink link='login' title='Войти' />
                }
            </div>
            <div className={classes.photo}>
                {isAuthorized
                    ? <NavLink to='profile'><img src='#' alt="profile" /></NavLink>
                    : <NavLink to='login'><BsPersonCircle className={classes.personCircle} /></NavLink>
                }
            </div>
        </div >
    );
};
