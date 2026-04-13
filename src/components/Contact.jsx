import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <>
      <section id="contact" className="contact section-padding">
        <div className="container contact-container">
          <div className="section-head text-center" style={{ textAlign: 'center' }}>
            <h2 className="section-title">Get In Touch</h2>
          </div>
          <p className="contact-text">
            I'm always looking to learn, grow, and explore new opportunities in the tech space. My inbox is open for meaningful conversations, collaborations, or even a quick hello—I'll do my best to get back to you!
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="mailto:ravikumar.offical2003@gmail.com" className="contact-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Say Hello
            </a>
            <a href="tel:+917667009461" className="contact-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z"/>
              </svg>
              +91 7667009461
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="social-links">
            <a href="https://github.com/D-RaviKumarofficial" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/ravi-kumar-d-535a98267" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
          <p>Designed and Built by Ravi</p>
        </div>
      </footer>
    </>
  );
};

export default Contact;
