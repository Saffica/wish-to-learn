import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const user = true;
    return (
        <nav className="navbar">
            <div className="col-1">
                <Link to="/">
                    <img src="/logo.png" alt="Logo" className="logo" />
                </Link>
                <Link to="/courses">
                    Список планов
                </Link>
                <Link to="/">
                    О нас
                </Link>
            </div>
            <div className="col-2">
                <div className="profile">
                
                    <Link to="/profile">
                        <img src="/profile.png" alt="Profile" className="profile-icon" />
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
