import Courses from './components/Courses';
import {Login} from './components/Login';
import Course from './components/Course';

import {COURSES_ROUTE, COURSE_ROUTE, LOGIN_ROUTE} from './utils/consts';

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Components: Login,
    },
];

export const privateRoutes = [
    {
        path: COURSES_ROUTE,
        Components: Courses,
    },
    {
        path: COURSE_ROUTE,
        Components: Course,
    },
];
