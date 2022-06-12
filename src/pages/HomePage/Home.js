import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';
import HeroSection from './HeroSection';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <About/>
            <Portfolio/>
            <Contact/>
        </div>
    );
};

export default Home;