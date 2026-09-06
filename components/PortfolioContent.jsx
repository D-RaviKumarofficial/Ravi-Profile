'use client';

import { useState, useEffect, useRef } from 'react';
import Sidebar from './Sidebar';
import BottomBar from './BottomBar';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Chatbot from './Chatbot';

export default function PortfolioContent() {
  const [activeSection, setActiveSection] = useState('home');
  const [soundOn, setSoundOn] = useState(false);
  const toggleSound = () => setSoundOn((prev) => !prev);

  const clickAudioRef = useRef(null);
  const hoverAudioRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (!clickAudioRef.current) {
      clickAudioRef.current = new Audio('/game click.wav');
      clickAudioRef.current.volume = 0.5;
    }
    if (!hoverAudioRef.current) {
      hoverAudioRef.current = new Audio('/hover.mp3');
      hoverAudioRef.current.volume = 0.25;
    }

    // Global click sound
    const handleClick = (e) => {
      if (!soundOn) return;
      const tag = e.target.tagName;
      if (tag === 'A' || tag === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
        clickAudioRef.current.currentTime = 0;
        clickAudioRef.current.play().catch(() => {});
      }
    };

    // Global hover sound — fires once per element entry
    let lastHovered = null;
    const handleMouseOver = (e) => {
      if (!soundOn) return;
      const target = e.target.closest('a, button');
      if (!target || target === lastHovered) return;
      lastHovered = target;
      hoverAudioRef.current.currentTime = 0;
      hoverAudioRef.current.play().catch(() => {});
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