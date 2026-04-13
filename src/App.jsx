import React, { useState, useEffect } from 'react';
import './styles/App.css'; // Optional container overrides if needed
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ParticlesBackground from './components/ParticlesBackground';
import FadeInSection from './components/FadeInSection';
import Chatbot from './components/Chatbot';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <ParticlesBackground theme={theme} />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <FadeInSection delay={200}>
          <About />
        </FadeInSection>
        <FadeInSection delay={200}>
          <Experience />
        </FadeInSection>
        <FadeInSection delay={200}>
          <Skills />
        </FadeInSection>
      </main>
      <FadeInSection delay={200}>
        <Contact />
      </FadeInSection>
      <Chatbot />
    </>
  );
}

export default App;
