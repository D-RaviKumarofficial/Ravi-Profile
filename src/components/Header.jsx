import React, { useState } from 'react';
import '../styles/Header.css';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
];

const Header = ({ theme, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="container header-container">
        <a href="#home" className="logo">
          <span className="text-gradient">&lt;</span>
          Ravi Kumar
          <span className="text-gradient">/&gt;</span>
        </a>

        <nav>
          <ul className="nav-links">
            {navItems.map(({ label, href }) => (
              <li key={label}><a href={href} className="nav-link">{label}</a></li>
            ))}
          </ul>
        </nav>

        <div className="header-right">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button className="social-cta" onClick={() => window.location.href = '#contact'}>
            Let's Talk
          </button>
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      <nav className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        {navItems.map(({ label, href }) => (
          <a key={label} href={href} className="nav-link" onClick={closeMenu}>{label}</a>
        ))}
        <button className="social-cta" onClick={() => { closeMenu(); window.location.href = '#contact'; }}>
          Let's Talk
        </button>
        <button className="theme-toggle" onClick={toggleTheme} style={{ marginTop: '0.5rem', alignSelf: 'flex-start' }}>
          {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </nav>
    </header>
  );
};

export default Header;
