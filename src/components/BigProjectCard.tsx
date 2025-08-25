import ProjectCard from "./ProjectCard";
import { type ProjectData} from "../constants";

interface BigProjectCardProps {
  projectId: number;
  projectData: ProjectData;
  onClick: () => void;
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