import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    const items = [
        {title: 'Главная', link: '/', id: '1'},
        {title: 'Список планов', link: 'courses', id: '2'},
    ];

    return (
        <div className='header__navigation navigation'>
            {
                <ul className='navigation__list'>
                    {items.map(({title, link, id}) => (
                        <li
                            className='navigation__item'
                            key={id}>
                            <NavLink to={link}>{title}</NavLink>
                        </li>
                    ))}
                </ul>
            }
        </div>
    );
};

export default Navigation;
