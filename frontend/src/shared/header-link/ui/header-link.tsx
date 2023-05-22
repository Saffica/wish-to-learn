import { NavLink } from 'react-router-dom';
import classes from './header-link.module.css';

export const HeaderLink = ({ title, link }: HeaderLinkProps): JSX.Element => {
    return (
        <NavLink
            to={link}
            className={classes.headerLink}>
            {title}
        </NavLink>
    );
};
