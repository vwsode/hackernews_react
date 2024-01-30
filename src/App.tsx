import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import { router } from '@/config/router';
import { store } from './store';

import '@assets/styles/index.scss';

const App = () => {
    return (
        <>
            <Provider store={store}>
                <RouterProvider router={router}></RouterProvider>
            </Provider>
        </>
    );
};

export default App;
