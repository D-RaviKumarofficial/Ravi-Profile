import ProjectDetail from '../../../components/ProjectDetail';
import { groups } from '../../../data/projects';

export function generateStaticParams() {
  return groups.flatMap((group) => group.projects.map((project) => ({ id: project.id })));
}

export default function ProjectPage({ params }) {
  const { id } = params;
  return <ProjectDetail id={id} />;
}