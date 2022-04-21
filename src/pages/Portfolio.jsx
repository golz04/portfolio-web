import React, { useEffect } from 'react';
import HeaderPortfolio from '../components/header-portfolio';
import Wave from '../components/wave';
import Projects from '../components/projects';

function Portfolio() {
    useEffect(() => {
        window.scroll({
            top: 0,
            behavior: 'smooth',
        });
    })
    return (
        <div>
            <HeaderPortfolio/>
            <Wave/>
            <Projects/>
        </div>
    );
}

export default Portfolio;