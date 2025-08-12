import ProjectCard from "./ProjectCard";

interface BigProjectCardProps {
  projectId: number;
  projectData: ProjectData;
  inClick: () => void;
}

function BigProjectCard({ projectId, projectData, onClick } : BigProjectCardProps) {
  return (
    <ProjectCard
      projectData={projectData}
      onClick={onClick}
      className={`bigProject bigProject${projectId}`}
    />
  )
}

export default BigProjectCard;