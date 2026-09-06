'use client';

import { useRouter } from 'next/navigation';
import '../styles/Projects.css';
import { groups } from '../data/projects';

const Projects = () => {
  const router = useRouter();

  const openProject = (id) => {
    router.push(`/project/${id}`);
  };

  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        <div className="section-head" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Projects</h2>
        </div>

        {groups.map((group) => (
          <div className="project-group" key={group.org}>
            <div className="project-group-header">
              <span className="group-org-badge">{group.org}</span>
            </div>
            <div className="projects-grid">
              {group.projects.map((project) => (
                <div
                  className="project-card clickable"
                  key={project.id}
                  onClick={() => openProject(project.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && openProject(project.id)}
                >
                  <div className="project-content">
                    <div className="project-meta">
                      <span className={`project-type ${project.type === 'POC' ? 'poc' : 'prod'}`}>
                        {project.type}
                      </span>
                    </div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-desc">{project.shortDesc}</p>
                    <div className="project-tech">
                      {project.tech.map((t, i) => (
                        <span key={i} className="tech-tag">{t}</span>
                      ))}
                    </div>
                    <span className="project-view-more">View Details →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;