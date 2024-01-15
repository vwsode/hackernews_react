import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import Main from '@pages/Main/Main';
import Ask from '@pages/Ask/Ask';
import Comments from '@pages/Comments/Comments';
import Jobs from '@pages/Jobs/Jobs';
import Login from '@pages/Login/Login';
import New from '@/pages/New/New';
import Past from '@pages/Past/Past';
import Post from '@pages/Post/Post';
import Register from '@pages/Register/Register';
import Show from '@pages/Show/Show';
import Submit from '@pages/Submit/Submit';
import User from '@pages/User/User';

import Layout from '@/components/Layout/Layout';

import { ROUTES } from '@constants/routes';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path={ROUTES.MAIN} element={<Layout />}>
            <Route index element={<Main />} />
            <Route path={ROUTES.ASK} element={<Ask />} />
            <Route path={ROUTES.COMMENTS} element={<Comments />} />
            <Route path={ROUTES.JOBS} element={<Jobs />} />
            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route path={ROUTES.NEW} element={<New />} />
            <Route path={ROUTES.PAST} element={<Past />} />
            <Route path={ROUTES.POST} element={<Post />} />
            <Route path={ROUTES.REGISTER} element={<Register />} />
            <Route path={ROUTES.SHOW} element={<Show />} />
            <Route path={ROUTES.SUBMIT} element={<Submit />} />
            <Route path={ROUTES.USER} element={<User />} />
        </Route>,
    ),
);

