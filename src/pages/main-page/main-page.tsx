import React from 'react';
import './main-page.scss';

import Header from '../../components/header/header.tsx';
import Banner from '../../components/banner/banner.tsx';
import Footer from '../../components/footer/footer.tsx';

const MainPage: React.FC = () => {
    return (
        <>
            <Banner />
            <Header />
            <Footer />
        </>
    );
}

export default MainPage;