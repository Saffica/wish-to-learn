import React from 'react';
import {NavbarItem} from './NavbarItem';

export const NavbarItems = ({items}) => {
    return (
        <div
            className='navbar_items'
            style={{display: 'flex', justifyContent: 'space-between', gap: '30px'}}>
            {items.map((item, index) => (
                <NavbarItem item={item} key={`navbar-item-${index}`} />
            ))}
        </div>
    );
};
