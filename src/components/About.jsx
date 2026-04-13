import React from 'react';
import '../styles/About.css';
import profileImg from '../assets/ravi.jpeg';

const About = () => {
  return (
    <section id="about" className="about section-padding">
      <div className="container about-grid">
        <div className="about-content">
          <div className="section-head">
            <h2 className="section-title">About Me</h2>
          </div>
          <p className="about-text">
            I’m Ravi Kumar D, an AI/ML Engineer currently working at Avasoft, specializing in model fine-tuning and building intelligent solutions. I have around 9 months of hands-on experience in Artificial Intelligence and Machine Learning, where I focus on optimizing models and improving performance for real-world applications.
          </p>
          <p className="about-text">
            Previously, I worked as a Full Stack Developer at Hema's Enterprise Private Limited, gaining practical experience in developing scalable and efficient web applications.
          </p>
          <p className="about-text">
            I completed my M.Sc. in Information Technology in 2025 and my BCA in 2023 from St. Joseph's College, Cuddalore. My academic background, combined with industry experience, has helped me build a strong foundation in both software development and AI technologies.
          </p>
        </div>
        
        <div className="about-image-wrapper" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          <img 
            src={profileImg} 
            alt="Ravi Kumar D" 
            style={{ 
              maxWidth: '350px', 
              width: '100%', 
              borderRadius: '20px', 
              border: 'var(--glass-border)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
              objectFit: 'cover',
              display: 'block'
            }} 
          />
          
          <div style={{
            background: 'var(--bg-card)',
            border: 'var(--glass-border)',
            borderRadius: '16px',
            padding: '1rem 2.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            backdropFilter: 'var(--glass-blur)',
          }}>
            <span style={{ fontSize: '2.2rem', fontWeight: '900', color: 'var(--accent-neon)', lineHeight: '1' }}>1.7+</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '2px', marginTop: '0.4rem', fontWeight: 'bold' }}>Years Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
