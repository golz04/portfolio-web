import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Header from '../components/header';
import Skills from '../components/skills';
import Partner from '../components/partner';
import Experience from '../components/experience';
import TopProjects from '../components/top-project';
import PreLoader from '../components/preloader';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
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
        
        AOS.init();
        AOS.refresh();
    })
    
    return !isLoading ? (
        <div>
            <Navbar />
            <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0">
                <Header />
                <Skills />
                <Experience />
                <Partner />
                <TopProjects />
            </div>
            <Footer />
        </div>
    ) : (
        <PreLoader />
    )
}

export default Home;