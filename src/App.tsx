import { RouterProvider } from 'react-router-dom';

import { router } from '@/config/router';

import '@assets/styles/index.scss';

const App = () => {
    return (
        <>
            <RouterProvider router={router}></RouterProvider>
        </>
    );
};

export default App;
