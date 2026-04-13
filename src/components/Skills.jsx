import React from 'react';
import '../styles/About.css'; // reusing some structural classes if needed
import { FaHtml5, FaCss3Alt, FaBootstrap, FaLaravel, FaPhp, FaPython, FaAws, FaFigma, FaJira, FaGithub, FaRobot } from 'react-icons/fa';
import { SiJquery, SiCodeigniter, SiMysql, SiPostgresql, SiFastapi, SiTerraform, SiJavascript, SiPostman, SiMongodb } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML', icon: <FaHtml5 /> },
        { name: 'CSS', icon: <FaCss3Alt /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'Bootstrap', icon: <FaBootstrap /> },
        { name: 'jQuery', icon: <SiJquery /> }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { isSubheading: true, title: 'Languages' },
        { name: 'PHP', icon: <FaPhp /> },
        { name: 'Python', icon: <FaPython /> },
        { isSubheading: true, title: 'Frameworks' },
        { name: 'Laravel', icon: <FaLaravel /> },
        { name: 'FastAPI', icon: <SiFastapi /> },
        { name: 'CodeIgniter', icon: <SiCodeigniter /> }
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'PostgreSQL', icon: <SiPostgresql /> },
        { name: 'MongoDB', icon: <SiMongodb /> }
      ]
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS Cloud Services', icon: <FaAws /> },
        { name: 'Terraform', icon: <SiTerraform /> }
      ]
    },
    {
      title: 'Tools',
      skills: [
        { name: 'GitHub', icon: <FaGithub /> },
        { name: 'Postman', icon: <SiPostman /> },
        { name: 'Figma', icon: <FaFigma /> },
        { name: 'Jira', icon: <FaJira /> }
      ]
    },
    {
      title: 'Vibe Coding',
      skills: [
        { name: 'Kiro', icon: <FaRobot /> },
        { name: 'Antigravity', icon: <FaRobot /> },
        { name: 'Zencoder', icon: <FaRobot /> },
        { name: 'Amazon Q', icon: <FaAws /> }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <div className="section-head text-center" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="section-title">Skills & Technologies</h2>
        </div>
        
        <div className="skills-wrapper" style={{ margin: '0 auto', maxWidth: '1000px', background: 'transparent', border: 'none', boxShadow: 'none', padding: 0 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {skillCategories.map((category, catIndex) => (
              <div key={catIndex} className="skills-category-card" style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '24px', border: 'var(--glass-border)', backdropFilter: 'var(--glass-blur)' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--text-primary)', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.8rem' }}>{category.title}</h3>
                <ul className="skills-list" style={{ justifyContent: 'flex-start', padding: 0, flexWrap: 'wrap' }}>
                  {category.skills.map((skill, index) => (
                    skill.isSubheading ? (
                      <li key={index} style={{ width: '100%', marginTop: '0.5rem', marginBottom: '0.2rem', fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--text-secondary)', fontWeight: 'bold', letterSpacing: '1px' }}>
                        {skill.title}
                      </li>
                    ) : (
                      <li key={index} className="skill-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}>
                        <span style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', color: 'var(--accent-neon)' }}>{skill.icon}</span>
                        {skill.name}
                      </li>
                    )
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
