import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with dynamic routing, payment gateway integration, and user dashboards.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      live: '#'
    },
    {
      title: 'Task Management App',
      description: 'A beautiful productivity application featuring drag-and-drop boards, team collaboration, and real-time updates.',
      tech: ['Next.js', 'TypeScript', 'Tailwind', 'Firebase'],
      github: '#',
      live: '#'
    },
    {
      title: 'AI Image Generator',
      description: 'Web wrapper for OpenAI DALL-E models, allowing users to generate, save, and share images securely.',
      tech: ['React', 'Express', 'OpenAI API', 'AWS S3'],
      github: '#',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        <div className="section-head text-center" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Featured Projects</h2>
        </div>
        
        <div className="projects-grid">
          {projectList.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                {/* Image placeholder - normally you'd use <img src={project.image} /> here */}
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="tech-tag">{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="project-link" aria-label="GitHub Link">
                    Code ➔
                  </a>
                  <a href={project.live} className="project-link" aria-label="Live Demo Link">
                    Live Demo ➔
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
