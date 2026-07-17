import React from 'react';
import '../styles/BottomBar.css';

const BottomBar = ({ soundOn, toggleSound }) => {
  return (
    <div className="bottom-bar">
      <div className="bottom-bar-line" />
      <div className="bottom-bar-inner">
        {/* Left: Sound Toggle */}
        <button className="bottom-bar-btn sound-toggle" onClick={toggleSound}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            {soundOn ? (
              <>
                <path d="M10 3L5 7H2V13H5L10 17V3Z" fill="currentColor" />
                <path d="M14 7.5C14.8 8.3 14.8 11.7 14 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M16.5 5.5C18 7 18 13 16.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            ) : (
              <>
                <path d="M10 3L5 7H2V13H5L10 17V3Z" fill="currentColor" />
                <path d="M14 8L18 12M18 8L14 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            )}
          </svg>
          <span className="bottom-bar-label">{soundOn ? 'Sound On' : 'Sound Off'}</span>
        </button>

        {/* Center: Current section indicator */}
        <div className="bottom-bar-center">
          <span className="bottom-bar-label">Portfolio</span>
        </div>

        {/* Right: Contact */}
        <a href="#contact" className="bottom-bar-btn">
          <span className="bottom-bar-label">Get In Touch</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default BottomBar;
