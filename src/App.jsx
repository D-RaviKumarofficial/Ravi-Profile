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
import FadeInSection from './components/FadeInSection';
import Chatbot from './components/Chatbot';
import ProjectDetail from './components/ProjectDetail';
import clickSound from './assets/game click.wav';

const audio = new Audio(clickSound);
audio.volume = 0.5;

function Portfolio({ soundOn, toggleSound }) {
  useEffect(() => {
    const handler = (e) => {
      if (!soundOn) return;
      const tag = e.target.tagName;
      if (tag === 'A' || tag === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
        audio.currentTime = 0;
        audio.play().catch(() => {});
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [soundOn]);

  return (
    <>
      <Sidebar soundOn={soundOn} />
      <div className="app-frame-wrapper">
        {/* 4-side border — individual elements so clip-path never hides them */}
        <div className="frame-border-top" />
        <div className="frame-border-right" />
        <div className="frame-border-bottom" />
        <div className="frame-border-left" />
        <svg className="frame-border-chamfer" aria-hidden="true">
          {/* mobile: 28px cut */}
          <line className="chamfer-mobile" x1="28" y1="0" x2="0" y2="28" />
          {/* desktop: 40px cut */}
          <line className="chamfer-desktop" x1="40" y1="0" x2="0" y2="40" />
        </svg>
        <div className="app-frame">
          <div className="app-content">
            <main>
              <Hero />
              <FadeInSection delay={200}><About /></FadeInSection>
              <FadeInSection delay={200}><Experience /></FadeInSection>
              <FadeInSection delay={200}><Skills /></FadeInSection>
              <FadeInSection delay={200}><Projects /></FadeInSection>
            </main>
            <FadeInSection delay={200}><Contact /></FadeInSection>
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
