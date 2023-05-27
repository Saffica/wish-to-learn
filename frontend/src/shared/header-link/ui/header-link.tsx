import { NavLink } from 'react-router-dom';
import classes from './header-link.module.scss';

export const HeaderLink: React.FunctionComponent<IHeaderLinkProps> = ({ link, title }) => {
    return (
        <NavLink
            to={link}
            className={({ isActive }) => isActive ? `${classes.headerLink} ${classes.active}` : classes.headerLink}>
            {title}
        </NavLink>
    );
};
