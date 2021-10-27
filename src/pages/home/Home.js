import React from 'react';
import HAbout from './about-us/HAbout';
import Banner from './banner/Banner';
import HServices from './home-services/HServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HAbout></HAbout>
            <HServices></HServices>
        </div>
    );
};

export default Home;