import { HeaderLink } from '../../../shared';
import styles from './navigation.module.scss';

export const Navigation = () => {
    const items = [
        { title: 'Главная', link: '/', id: '1' },
        { title: 'Список планов', link: 'courses', id: '2' },
    ];

    return (
        <div className={styles.navigation}>
            {
                <ul className={styles.navigationList}>
                    {items.map(({ title, link, id }) => (
                        <li
                            className={styles.navigationItem}
                            key={id}>
                            <HeaderLink link={link} title={title} />
                        </li>
                    ))}
                </ul>
            }
        </div>
    );
};
