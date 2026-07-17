import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Sidebar from './components/Sidebar';
import BottomBar from './components/BottomBar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import ProjectDetail from './components/ProjectDetail';
import clickSound from './assets/game click.wav';
import hoverSound from './assets/hover.mp3';

const clickAudio = new Audio(clickSound);
clickAudio.volume = 0.5;

const hoverAudio = new Audio(hoverSound);
hoverAudio.volume = 0.25;

function Portfolio({ soundOn, toggleSound }) {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Global click sound
    const handleClick = (e) => {
      if (!soundOn) return;
      const tag = e.target.tagName;
      if (tag === 'A' || tag === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
        clickAudio.currentTime = 0;
        clickAudio.play().catch(() => {});
      }
    };

    // Global hover sound — fires once per element entry
    let lastHovered = null;
    const handleMouseOver = (e) => {
      if (!soundOn) return;
      const target = e.target.closest('a, button');
      if (!target || target === lastHovered) return;
      lastHovered = target;
      hoverAudio.currentTime = 0;
      hoverAudio.play().catch(() => {});
    };
    const handleMouseOut = (e) => {
      const target = e.target.closest('a, button');
      if (target === lastHovered) lastHovered = null;
    };

    document.addEventListener('click', handleClick);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [soundOn]);

  return (
    <>
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="app-frame-wrapper">
        {/* 4-side border */}
        <div className="frame-border-top" />
        <div className="frame-border-right" />
        <div className="frame-border-bottom" />
        <div className="frame-border-left" />
        <svg className="frame-border-chamfer" aria-hidden="true">
          <line className="chamfer-mobile" x1="28" y1="0" x2="0" y2="28" />
          <line className="chamfer-desktop" x1="40" y1="0" x2="0" y2="40" />
        </svg>
        <div className="app-frame">
          <div className="app-content">
            <div className={`section-panel ${activeSection === 'home' ? 'section-active' : ''}`}>
              <Hero />
            </div>
            <div className={`section-panel ${activeSection === 'about' ? 'section-active' : ''}`}>
              <About />
            </div>
            <div className={`section-panel ${activeSection === 'experience' ? 'section-active' : ''}`}>
              <Experience />
            </div>
            <div className={`section-panel ${activeSection === 'skills' ? 'section-active' : ''}`}>
              <Skills />
            </div>
            <div className={`section-panel ${activeSection === 'projects' ? 'section-active' : ''}`}>
              <Projects />
            </div>
            <div className={`section-panel ${activeSection === 'contact' ? 'section-active' : ''}`}>
              <Contact />
            </div>
          </div>
          <BottomBar soundOn={soundOn} toggleSound={toggleSound} />
        </div>
      </div>
      <Chatbot />
    </>
  );
}

function App() {
  const [soundOn, setSoundOn] = useState(false);
  const toggleSound = () => setSoundOn(prev => !prev);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio soundOn={soundOn} toggleSound={toggleSound} />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
