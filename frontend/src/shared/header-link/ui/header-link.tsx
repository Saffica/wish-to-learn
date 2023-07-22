import { NavLink } from 'react-router-dom';
import styles from './header-link.module.scss';

export const HeaderLink: React.FunctionComponent<IHeaderLinkProps> = ({ link, title }) => {
    return (
        <NavLink
            to={link}
            className={({ isActive }) => isActive ? `${styles.headerLink} ${styles.active}` : styles.headerLink}>
            {title}
        </NavLink>
    );
};
