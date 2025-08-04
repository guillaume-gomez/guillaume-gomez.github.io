import { ProjectData } from "../constants";


interface ProjectDetailProps {
  projectData: ProjectData;
}

function ProjectDetail({projectData} : ProjectDetailProps) {
  return(
    <div className="flex flex-col gap-3">
      <p className="text-3xl underline">{projectData.name}</p>
      <div className="">
        <video autoPlay muted controls className={`object-fill w-full h-full rounded-3xl`}> 
         <source src={projectData.videoUrl} type="video/mp4" />
        </video>
        <img 
          className={`object-fill w-full h-full rounded-3xl`}
          src={`./projects/${projectData.preview}`}
        />
      </div>
      <div>
        <p>
          lorem imsum
        </p>
      </div>
    </div>
  );
}

export default ProjectDetail;