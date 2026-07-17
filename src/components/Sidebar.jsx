import React, { useState, useEffect, useCallback } from 'react';
import '../styles/Sidebar.css';
import hoverSound from '../assets/hover.mp3';

const navItems = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

const hoverAudio = new Audio(hoverSound);
hoverAudio.volume = 0.3;

function playHover() {
  hoverAudio.currentTime = 0;
  hoverAudio.play().catch(() => {});
}

const Sidebar = ({ theme, toggleTheme }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = useCallback((href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].id);
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="sidebar" aria-label="Section navigation">
        <div className="sidebar-items">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`sidebar-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              onMouseEnter={playHover}
              aria-label={`Navigate to ${item.label}`}
            >
              <div className="sidebar-dot-wrapper">
                <div className={`sidebar-dot ${activeSection === item.id ? 'dot-active' : ''}`}>
                  <div className="sidebar-dot-fill" />
                </div>
              </div>
              <span className="sidebar-label">{item.label}</span>
            </a>
          ))}
        </div>

        <div className="sidebar-bottom">
          <button
            className="sidebar-theme-btn"
            onClick={toggleTheme}
            onMouseEnter={playHover}
            aria-label="Toggle theme"
          >
            <div className="sidebar-dot-wrapper">
              <div className="sidebar-dot theme-dot">
                <div className="sidebar-dot-fill" />
              </div>
            </div>
            <span className="sidebar-label">{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>
        </div>
      </nav>

      {/* Mobile Hamburger */}
      <button
        className={`sidebar-hamburger ${mobileOpen ? 'open' : ''}`}
        onClick={() => setMobileOpen(o => !o)}
        aria-label="Toggle navigation"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Mobile Drawer */}
      <div className={`sidebar-mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        <div className="sidebar-mobile-items">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`sidebar-mobile-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
            >
              <div className={`sidebar-dot ${activeSection === item.id ? 'dot-active' : ''}`}>
                <div className="sidebar-dot-fill" />
              </div>
              <span>{item.label}</span>
            </a>
          ))}
          <button className="sidebar-mobile-theme" onClick={toggleTheme}>
            {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
