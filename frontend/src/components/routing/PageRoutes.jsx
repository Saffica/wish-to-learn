import { WelcomePage, CoursesPage, NotFoundPage, ProfilePage, LoginPage } from '../../pages';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '../layout/Layout';
import React from 'react';

export const PageRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<WelcomePage />} />
                <Route path='courses' element={<CoursesPage />} />
                <Route path='profile' element={<ProfilePage />} />
                <Route path='login' element={<LoginPage />} />
                <Route path='*' element={<NotFoundPage />} />
            </Route>
        </Routes>
    )
}
