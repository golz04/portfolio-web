import React from 'react';
import Navbar from '../components/navbar';
import HeaderPortfolio from '../components/header-portfolio';
import Wave from '../components/wave';
import Projects from '../components/projects';
import Footer from '../components/footer';

function Portfolio() {
    return (
        <div>
            <Navbar/>
            <HeaderPortfolio/>
            <Wave/>
            <Projects/>
            <Footer/>
        </div>
    );
}

export default Portfolio;