import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import { Ask, Comments, Jobs, Login, Main, New, Past, Post, Show, Submit, User } from '@/pages';
import Layout from '@/components/Layout/Layout';

import { ROUTES } from '@constants/routes';
import Register from '@/pages/Register/Register';

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
