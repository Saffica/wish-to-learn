import classes from './navigation.module.scss';
import { HeaderLink } from '../../../shared';

export const Navigation = () => {
    const items = [
        { title: 'Главная', link: '/', id: '1' },
        { title: 'Список планов', link: 'courses', id: '2' },
    ];

    return (
        <div className={classes.navigation}>
            {
                <ul className={classes.navigationList}>
                    {items.map(({ title, link, id }) => (
                        <li
                            className={classes.navigationItem}
                            key={id}>
                            <HeaderLink link={link} title={title} />
                        </li>
                    ))}
                </ul>
            }
        </div>
    );
};
