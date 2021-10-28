import React from 'react';
import './About.css'
import BottomAbout from './bottom section/BottomAbout';
import TopAbout from './top section/TopAbout';

const About = () => {
    return (
        <div>
            <TopAbout></TopAbout>
            <BottomAbout></BottomAbout>
        </div>
    );
};

export default About;