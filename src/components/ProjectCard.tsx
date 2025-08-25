import { useState } from "react"
import { type ProjectData } from "../constants";

interface ProjectCardProps {
  projectData: ProjectData;
  onClick: () => void;
  className: string;
}

function ProjectCard({ projectData, onClick, className } : ProjectCardProps) {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <div
      className={`projectCard ${className} ${hover ? 'cursor-pointer' : '' }`}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {
        projectData.videoUrl ?
          (
            <>
              <video autoPlay muted /*controls*/ className={`${hover ? 'block' : 'hidden' } object-fill w-full h-full`}> 
                 <source src={projectData.videoUrl} type="video/mp4" />
              </video>
              <img
                className={`sepia-40 ${hover ? 'hidden' : 'block'} object-fill w-full h-full`}
                src={`./projects/${projectData.preview}`}
              />
            </>
          ) :
          <img
            className="object-fill w-full h-full"
            src={`./projects/${projectData.preview}`}
          />

      }
    </div>
  )
}

export default ProjectCard;