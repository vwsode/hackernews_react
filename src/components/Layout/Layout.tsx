import React from 'react';

import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
