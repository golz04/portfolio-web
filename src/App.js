import React from 'react';
import Navbar from './components/navbar';
import Header from './components/header';
import Skills from './components/skills';
import Partner from './components/partner';
import Experience from './components/experience';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Skills />
      <Experience />
      <Partner />
    </div>
  );
}

export default App;
