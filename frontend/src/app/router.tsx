import { Layout } from './layout';
import { Suspense, lazy } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";

const WelcomePage = lazy(() => import('../page/welcome'));
const CoursesPage = lazy(() => import('../page/courses'));
const LoginPage = lazy(() => import('../page/login'));
const NotFoundPage = lazy(() => import('../page/not-found'));
const ProfilePage = lazy(() => import('../page/profile'));

export const Router: React.FunctionComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Suspense fallback={<p>Loading</p>}><Layout /></Suspense>}>
                    <Route index element={<WelcomePage />} />
                    <Route path='courses' element={<CoursesPage />} />
                    <Route path='profile' element={<ProfilePage />} />
                    <Route path='login' element={<LoginPage />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
