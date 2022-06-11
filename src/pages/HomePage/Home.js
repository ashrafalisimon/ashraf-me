import React from 'react';
import Contact from '../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';
import HeroSection from './HeroSection';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <Portfolio/>
            <Contact/>
        </div>
    );
};

export default Home;