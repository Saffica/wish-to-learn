import { NavLink } from 'react-router-dom';
import classes from './logo.module.css';
import logoPath from '../../../shared/imgs/logo.png';

export const Logo = () => {
    return (
        <div className={classes.logo}>
            <NavLink to='/'>
                <img src={logoPath} alt="wish-to-lern" />
            </NavLink>
        </div>
    );
};
