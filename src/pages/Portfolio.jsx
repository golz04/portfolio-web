import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import HeaderPortfolio from '../components/header-portfolio';
import Wave from '../components/wave';
import Projects from '../components/projects';
import PreLoader from '../components/preloader';

function Portfolio() {
    const [isLoading, setIsLoading] = useState(true);
        const handleLoading = () => {
        setIsLoading(false);
    }

    useEffect(() => {
        window.scroll({
            top: 0,
            behavior: 'smooth',
        });

        setTimeout(handleLoading, 1000);
    })

    return !isLoading ? (
        <div>
            <Navbar />
            <HeaderPortfolio />
            <Wave />
            <Projects />
            <Footer />
        </div>
    ) : (
        <PreLoader />
    )
}

export default Portfolio;