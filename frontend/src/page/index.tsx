import { Suspense, lazy } from 'react';
import { Routes, Route, Outlet } from 'react-router';
import { Header } from '../widgets';
import { Footer } from '../widgets';

const WelcomePage = lazy(() => import('./welcome'));
const CoursesPage = lazy(() => import('./courses'));
const LoginPage = lazy(() => import('./login'));
const NotFoundPage = lazy(() => import('./not-found'));
const ProfilePage = lazy(() => import('./profile'));

const Layout = (): JSX.Element => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer text='© 2023 хочу-учу.рф' />
        </>
    )
}

const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<Suspense fallback={<p>Loading</p>}><Layout /></Suspense>}>
                <Route path='/' element={<WelcomePage />} />
                <Route path='courses' element={<CoursesPage />} />
                <Route path='profile' element={<ProfilePage />} />
                <Route path='login' element={<LoginPage />} />
                <Route path='*' element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
};

export default Routing;
