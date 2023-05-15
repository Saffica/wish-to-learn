import React from 'react';
import { lazy } from 'react';
import { Header } from '../widgets';
import { Routes, Route } from 'react-router';
import { Outlet } from 'react-router-dom';

const CoursesPage = lazy(() => import('./courses'));
const LoginPage = lazy(() => import('./login'));
const NotFoundPage = lazy(() => import('./not-found'));
const ProfilePage = lazy(() => import('./profile'));
const WelcomePage = lazy(() => import('./welcome'));

const Routing = () => {
    return (
        <Routes>
            <Route
                path='/'
                element={
                    <>
                        <Header />
                        <main>
                            <Outlet />
                        </main>
                        <footer></footer>
                    </>
                }>
                <Route
                    index
                    element={<WelcomePage />}
                />
                <Route
                    path='courses'
                    element={<CoursesPage />}
                />
                <Route
                    path='profile'
                    element={<ProfilePage />}
                />
                <Route
                    path='login'
                    element={<LoginPage />}
                />
                <Route
                    path='*'
                    element={<NotFoundPage />}
                />
            </Route>
        </Routes>
    );
};

export default Routing;
