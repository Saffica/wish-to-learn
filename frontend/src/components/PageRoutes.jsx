import { HomePage, CoursePage, CoursesPage, NotFoundPage, PlanListPage, AboutPage, ProfilePage } from '../pages';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import React from 'react';

export const PageRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path='course' element={<CoursePage />} />
                <Route path='courses' element={<CoursesPage />} />
                <Route path='plan_list' element={<PlanListPage />} />
                <Route path='about' element={<AboutPage />} />
                <Route path='profile' element={<ProfilePage />} />
                <Route path='*' element={<NotFoundPage />} />
            </Route>
        </Routes>
    )
}
