import React from 'react';
import {lazy} from 'react';
import {Routes, Route} from 'react-router';

const Header = lazy(() => import('../widgets/'));
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
                element={<Header />}>
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
