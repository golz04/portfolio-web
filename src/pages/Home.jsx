import React from 'react';
import Navbar from '../components/navbar';
import Header from '../components/header';
import Skills from '../components/skills';
import Partner from '../components/partner';
import Experience from '../components/experience';
import Projects from '../components/projects';
import Footer from '../components/footer';

function Home() {
  return (
      <div>
        <Navbar />
        <Header />
        <Skills />
        <Experience />
        <Partner />
        <Projects />
        <Footer />
      </div>
  );
}

export default Home;