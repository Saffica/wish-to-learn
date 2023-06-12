import { Layout } from './layout';
import { lazy } from 'react';
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

const WelcomePage = lazy(() => import('../page/welcome'));
const CoursesPage = lazy(() => import('../page/courses'));
const LoginPage = lazy(() => import('../page/login'));
const NotFoundPage = lazy(() => import('../page/not-found'));
const ProfilePage = lazy(() => import('../page/profile'));

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />}>
            <Route index element={<WelcomePage />} />
            <Route path='courses' element={<CoursesPage />} />
            <Route path='profile' element={<ProfilePage />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='*' element={<NotFoundPage />} />
        </Route>
    )
);
