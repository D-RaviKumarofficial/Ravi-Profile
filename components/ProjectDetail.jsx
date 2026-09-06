'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import '../styles/ProjectDetail.css';
import { groups } from '../data/projects';

const allProjects = groups.flatMap((g) =>
  g.projects.map((p) => ({ ...p, org: g.org }))
);

const ProjectDetail = ({ id }) => {
  const router = useRouter();
  const project = allProjects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="detail-not-found">
        <p>Project not found.</p>
        <button onClick={() => router.push('/')}>← Back</button>
      </div>
    );
  }

  return (
    <div className="detail-page">
      <div className="detail-container">
        <button className="detail-back" onClick={() => router.back()}>
          ← Back to Projects
        </button>

        <div className="detail-header">
          <span className={`project-type ${project.type === 'POC' ? 'poc' : 'prod'}`}>
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