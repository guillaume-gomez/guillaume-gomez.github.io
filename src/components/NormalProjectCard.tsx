import ProjectCard from "./ProjectCard";
import { type ProjectData } from "../constants";
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