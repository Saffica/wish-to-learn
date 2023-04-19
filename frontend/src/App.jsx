import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {HomePage} from './pages';
import {CoursePage} from './pages';
import {CoursesPage} from './pages';
import {NotFoundPage} from './pages';
import {PlanListPage} from './pages';
import {AboutPage} from './pages';
import { Layout } from './components';
import './App.css';


export const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path='course' element={<CoursePage />} />
                    <Route path='courses' element={<CoursesPage />} />
                    <Route path='plan_list' element={<PlanListPage />} />
                    <Route path='about' element={<AboutPage />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Route>
            </Routes>
        </>
    );
}