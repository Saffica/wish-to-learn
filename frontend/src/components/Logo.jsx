import React from 'react';
import {Link} from 'react-router-dom';

export const Logo = ({height, width}) => {
    return (
        <div className='logo'>
            <Link to='/'>
                <img
                    src='/logo.png'
                    alt='Logo'
                    className='logo_img'
                    style={{height, width}}
                />
            </Link>
        </div>
    );
};
