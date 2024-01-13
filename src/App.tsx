import { RouterProvider } from 'react-router-dom';

import Layout from '@/components/Layout/Layout';

import { routes } from '@/config/router';

const App = () => {
    return (
        <>
            <Layout>
                <RouterProvider router={routes}></RouterProvider>
            </Layout>
        </>
    );
};

export default App;
