import { createBrowserRouter } from 'react-router-dom';

import Main from '@pages/Main/Main';
import Ask from '@pages/Ask/Ask';
import Comments from '@pages/Comments/Comments';
import Jobs from '@pages/Jobs/Jobs';
import Login from '@pages/Login/Login';
import News from '@pages/News/News';
import Past from '@pages/Past/Past';
import Post from '@pages/Post/Post';
import Register from '@pages/Register/Register';
import Show from '@pages/Show/Show';
import Submit from '@pages/Submit/Submit';
import User from '@pages/User/User';

import { ROUTES } from '@constants/routes';


export const routes = createBrowserRouter([
    {
        path: ROUTES.MAIN,
        element: <Main />,
    },
    {
        path: ROUTES.ASK,
        element: <Ask />,
    },
    {
        path: ROUTES.COMMENTS,
        element: <Comments />,
    },
    {
        path: ROUTES.JOBS,
        element: <Jobs />,
    },
    {
        path: ROUTES.LOGIN,
        element: <Login />,
    },
    {
        path: ROUTES.NEWS,
        element: <News />,
    },
    {
        path: ROUTES.PAST,
        element: <Past />,
    },
    {
        path: ROUTES.POST,
        element: <Post />,
    },
    {
        path: ROUTES.REGISTER,
        element: <Register />,
    },
    {
        path: ROUTES.SHOW,
        element: <Show />,
    },
    {
        path: ROUTES.SUBMIT,
        element: <Submit />,
    },
    {
        path: ROUTES.USER,
        element: <User />,
    },
]);
