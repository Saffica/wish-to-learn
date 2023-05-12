import { NavLink } from 'react-router-dom';
import defaultPhoto from '../../../../imgs/defaultPhoto.svg'
import myPhoto from '../../../../imgs/myPhoto.svg'
import s from './User.module.css';

export const User = () => {
    const isAuthorized = true;

    return (
        <div className={s.user}>
            <div className={s.link}>
                {isAuthorized
                    ? <NavLink to='/'>Выйти</NavLink>
                    : <NavLink to='login'>Войти</NavLink>
                }
            </div>
            <div className={s.photo}>
                {isAuthorized
                    ? <NavLink to='profile'><img src={myPhoto} alt="profile" /></NavLink>
                    : <NavLink to='login'><img src={defaultPhoto} alt="default" /></NavLink>
                }
            </div>
        </div >
    );
};
