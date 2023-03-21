import React from 'react';
import {NavbarItems} from './NavbarItems';

export const Navbar = () => {
    return (
        <nav
            className='navbar'
            style={{width: '100%', display: 'flex', justifyContent: 'start', marginLeft: '50px'}}>
            <NavbarItems
                items={[
                    {title: 'список планов', link: '/courses'},
                    {title: 'о нас', link: '/'},
                ]}
            />
        </nav>
    );
};
