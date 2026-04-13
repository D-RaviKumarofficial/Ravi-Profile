import React from 'react';
import '../styles/Projects.css'; // Reuse card styling

const Experience = () => {
  return (
    <section id="experience" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <div className="section-head text-center" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Professional Experience</h2>
        </div>
        
        <div className="projects-grid" style={{ marginTop: '3rem', gridTemplateColumns: 'repeat(2, 1fr)' }}>
          
          <div className="project-card">
            <div className="project-content" style={{ padding: '2rem' }}>
              <div style={{ marginBottom: '1.2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <h3 className="project-title" style={{ margin: 0, color: 'var(--accent-neon)', fontSize: '1.4rem' }}>AI/ML Engineer</h3>
                  <span style={{ fontSize: '0.85rem', color: 'var(--accent-neon)', fontWeight: 'bold', background: 'rgba(0, 240, 255, 0.1)', padding: '0.3rem 0.8rem', borderRadius: '20px' }}>August 2025 - Present</span>
                </div>
                <div style={{ color: 'var(--text-primary)', opacity: 0.8, fontSize: '0.95rem', marginTop: '0.3rem', fontWeight: '500' }}>
                  Ava Software Private Limited
                </div>
              </div>
              <p className="project-desc" style={{ textAlign: 'justify' }}>
                Built and deployed scalable AI systems using deep learning and foundation models, incorporating Strands agents for dynamic API-driven workflows and real-time intelligent responses. Designed and implemented cloud-native AI microservices on AWS, leveraging Terraform for infrastructure automation and Amazon Bedrock for efficient model orchestration. Developed a high-performance image enhancement pipeline using advanced vision models such as Qwen and Flux, enabling high-quality image restoration and prompt-driven content generation.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Fast API</span>
                <span className="tech-tag">Postgres</span>
                <span className="tech-tag">Generative AI</span>
                <span className="tech-tag">Deep Learning</span>
                <span className="tech-tag">AWS Cloud</span>
                <span className="tech-tag">Terraform</span>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-content" style={{ padding: '2rem' }}>
              <div style={{ marginBottom: '1.2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <h3 className="project-title" style={{ margin: 0, color: 'var(--accent-purple)', fontSize: '1.4rem' }}>Software Developer</h3>
                  <span style={{ fontSize: '0.85rem', color: 'var(--accent-purple)', fontWeight: 'bold', background: 'rgba(112, 0, 255, 0.1)', padding: '0.3rem 0.8rem', borderRadius: '20px' }}>Dec 2024 - July 2025</span>
                </div>
                <div style={{ color: 'var(--text-primary)', opacity: 0.8, fontSize: '0.95rem', marginTop: '0.3rem', fontWeight: '500' }}>
                  Hema's Enterprise Private Limited
                </div>
              </div>
              <p className="project-desc" style={{ textAlign: 'justify' }}>
                Developed scalable task management systems and ticketing workflows with robust role-based authentication, configurable multi-stage approval processes, and real-time review modules. Built dynamic, responsive interfaces using AJAX and jQuery to enable seamless, reload-free user interactions. Implemented backend logic using Laravel and CodeIgniter, and designed structured relational databases to support efficient data handling, advanced analytics, and external API integrations.
              </p>
              <div className="project-tech">
                <span className="tech-tag">PHP</span>
                <span className="tech-tag">Laravel</span>
                <span className="tech-tag">Codeigniter</span>
                <span className="tech-tag">MySQL</span>
                <span className="tech-tag">Ajax & jQuery</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
