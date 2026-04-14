import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { groups } from './Projects';
import '../styles/ProjectDetail.css';

const allProjects = groups.flatMap((g) =>
  g.projects.map((p) => ({ ...p, org: g.org }))
);

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = allProjects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="detail-not-found">
        <p>Project not found.</p>
        <button onClick={() => navigate('/#projects')}>← Back</button>
      </div>
    );
  }

  return (
    <div className="detail-page">
      <div className="detail-container">
        <button className="detail-back" onClick={() => navigate(-1)}>
          ← Back to Projects
        </button>

        <div className="detail-header">
          <span className={`project-type ${project.type === 'Internal Project' ? 'internal' : 'client'}`}>
            {project.type}
          </span>
          <span className="detail-org">{project.org}</span>
        </div>

        <h1 className="detail-title">{project.title}</h1>

        <div className="detail-tech">
          {project.tech.map((t, i) => (
            <span key={i} className="tech-tag">{t}</span>
          ))}
        </div>

        <div className="detail-body">
          {project.description.trim().split('\n\n').map((para, i) => (
            <p key={i}>{para.trim()}</p>
          ))}
        </div>

        <div className="detail-confidential">
          🔒 Source code and live demo are not publicly available due to organizational confidentiality.
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
