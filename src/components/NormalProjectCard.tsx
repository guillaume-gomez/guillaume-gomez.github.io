import ProjectCard from "./ProjectCard";

interface NormalProjectCardProps {
  projectData: ProjectData;
  onClick: () => void;
}

function NormalProjectCard({ projectData, onClick } : NormalProjectCardProps) {
  
  return (
    <ProjectCard
      projectData={projectData}
      onClick={onClick}
      className="other"
    />
  )
}

export default NormalProjectCard;