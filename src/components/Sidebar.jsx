import React, { useState } from 'react';
import '../styles/Sidebar.css';

const navItems = [
  { label: 'Home',       id: 'home' },
  { label: 'About',      id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Skills',     id: 'skills' },
  { label: 'Projects',   id: 'projects' },
  { label: 'Contact',    id: 'contact' },
];

const Sidebar = ({ activeSection, setActiveSection }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="sidebar" aria-label="Section navigation">
        <div className="sidebar-items">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`sidebar-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
              aria-label={`Navigate to ${item.label}`}
            >
              <div className="sidebar-dot-wrapper">
                <div className={`sidebar-dot ${activeSection === item.id ? 'dot-active' : ''}`}>
                  <div className="sidebar-dot-fill" />
                </div>
              </div>
              <span className="sidebar-label">{item.label}</span>
            </button>
          ))}
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
            <button
              key={item.id}
              className={`sidebar-mobile-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              <div className={`sidebar-dot ${activeSection === item.id ? 'dot-active' : ''}`}>
                <div className="sidebar-dot-fill" />
              </div>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
