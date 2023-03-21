import React from 'react';
import {Logo} from './Logo';
import {Navbar} from './Navbar';
import {Login} from './Login';

export const Header = () => {
    return (
        <div
            className='header'
            style={{backgroundColor: '#42597B', width: '100%', padding: '10px'}}>
            <div
                className='header_container'
                style={{
                    maxWidth: '70%',
                    margin: '0 auto',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                <Logo
                    height={'60px'}
                    width={'60px'}
                />
                <Navbar />
                <Login />
            </div>
        </div>
    );
};
