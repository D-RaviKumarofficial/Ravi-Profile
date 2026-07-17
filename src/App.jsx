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

function Portfolio({ theme, toggleTheme, soundOn, toggleSound }) {
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
      <Sidebar theme={theme} toggleTheme={toggleTheme} soundOn={soundOn} />
      <div className="app-frame">
        <div className="app-frame-border" />
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
      <Chatbot />
    </>
  );
}

function App() {
  const [theme, setTheme] = useState('dark');
  const [soundOn, setSoundOn] = useState(false);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  const toggleSound = () => setSoundOn(prev => !prev);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio theme={theme} toggleTheme={toggleTheme} soundOn={soundOn} toggleSound={toggleSound} />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
