import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../layout/header/Header';

export const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <footer></footer>
        </>
    )
}