import React from 'react';
import {Link} from 'react-router-dom';

export const NavbarItem = ({item}) => {
    return (
        <div className='navbar-item'>
            <Link
                to={item.link}
                style={{
                    color: '#fff',
                    textDecoration: 'none',
                    textTransform: 'uppercase',
                    fontWeight: 'bold'
                }}>
                {item.title}
            </Link>
        </div>
    );
};
