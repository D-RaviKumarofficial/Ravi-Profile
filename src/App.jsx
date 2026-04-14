import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ParticlesBackground from './components/ParticlesBackground';
import FadeInSection from './components/FadeInSection';
import Chatbot from './components/Chatbot';
import ProjectDetail from './components/ProjectDetail';

function Portfolio({ theme, toggleTheme }) {
  return (
    <>
      <ParticlesBackground theme={theme} />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <FadeInSection delay={200}><About /></FadeInSection>
        <FadeInSection delay={200}><Experience /></FadeInSection>
        <FadeInSection delay={200}><Skills /></FadeInSection>
        <FadeInSection delay={200}><Projects /></FadeInSection>
      </main>
      <FadeInSection delay={200}><Contact /></FadeInSection>
      <Chatbot />
    </>
  );
}

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
