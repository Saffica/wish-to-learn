import React from "react";
import { Outlet } from "react-router-dom";
import { Logo } from "./Header/Logo";
import { NavBar } from "./Header/NavBar";
import './Layout.css';

export const Layout = () => {
    return (
        <>
            <header>
                <div className="container">
                    <Logo />
                    <NavBar />
                </div>
            </header>
            <main>
                <Outlet />
            </main>
            <footer></footer>
        </>
    )
}