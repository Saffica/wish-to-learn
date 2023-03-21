import React from 'react';
import {Link} from 'react-router-dom';

export const Login = () => {
    return (
        <div className='login'>
            <Link
                to='/profile'
                style={{
                    display: 'flex',
                    gap: '30px',
                    alignItems: 'center',
                    color: '#fff',
                    textDecoration: 'none',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                }}>
                    Войти
                <img
                    src='/profile.png'
                    alt='Profile'
                    className='profile-icon'
                    style={{borderRadius: '50%', height: '35px'}}
                />
            </Link>
        </div>
    );
};
