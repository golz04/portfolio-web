import React, { useEffect } from 'react';
import Header from '../components/header';
import Skills from '../components/skills';
import Partner from '../components/partner';
import Experience from '../components/experience';
import TopProjects from '../components/top-project';

function Home() {
    useEffect(() => {
        window.scroll({
            top: 0,
            behavior: 'smooth',
        });
    })
    return (
        <div>
            <Header />
            <Skills />
            <Experience />
            <Partner />
            <TopProjects />
        </div>
    );
}

export default Home;