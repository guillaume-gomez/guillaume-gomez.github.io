import { useState } from "react"
import { ProjectData } from "../../constants";

interface BigProjectCardProps {
  projectId: number;
  projectData: ProjectData;
  inClick: () => void;
}

function BigProjectCard({ projectId, projectData, onClick } : BigProjectCardProps) {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <div
      className={`bigProject bigProject${projectId}`}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <video autoPlay muted controls className={`${hover ? 'block' : 'hidden' } object-fill w-full h-full`}> 
         <source src={projectData.videoUrl} type="video/mp4" />
      </video>
      <img 
        className={`${hover ? 'hidden' : 'block'} object-fill w-full h-full`}
        src={`./projects/${projectData.preview}`}
      />
    </div>
  )
}

export default BigProjectCard;