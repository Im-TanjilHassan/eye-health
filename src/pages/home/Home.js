import React from 'react';
import HAbout from './about-us/HAbout';
import Banner from './banner/Banner';
import Faq from './FAQ/Faq';
import HServices from './home-services/HServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HAbout></HAbout>
            <HServices></HServices>
            <Faq></Faq>
        </div>
    );
};

export default Home;