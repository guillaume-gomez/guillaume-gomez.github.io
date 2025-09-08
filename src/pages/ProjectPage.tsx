import { useNavigate } from 'react-router-dom';
import { type ProjectData } from "../constants";
import { animatePageOut } from "../animations";



interface ProjectPageProps {
  projectData: ProjectData;
}

const dataProject = `Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.
Il n'a pas fait que survivre cinq siècles.`;


function ProjectPage({ projectData } : ProjectPageProps) {
  const navigate = useNavigate();

  function onBack() {
    animatePageOut(() => {
      navigate(-1);
    });
  }

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-6 grid-rows-6 gap-4">
          <button className="btn btn-outline btn-accent" onClick={onBack}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
            </svg>
            Back
          </button>
          <div className="col-span-2 col-start-3">
            <p className="text-4xl underline">{projectData.name}</p>
          </div>
          <div className="col-span-3 col-start-1 row-start-2">
            <ul className="flex flex-row gap-2">
              {
                projectData.tags.map(tag => (
                  (
                    <li className="badge">
                      {tag}
                    </li>
                  )
                ))
              }
            </ul>
          </div>
          <div className="col-span-3 col-start-4 row-start-2">
            <button>toto</button>
          </div>
          <div className="col-span-3 row-span-3 col-start-1 row-start-3">
            <video autoPlay muted controls className={`object-fill w-full h-full rounded-3xl`}> 
             <source src={projectData.videoUrl} type="video/mp4" />
            </video>
          </div>
          <div className="col-span-3 row-span-3 col-start-4 row-start-3">
            <img 
              className={`object-fill w-full h-full rounded-3xl`}
              src={`./projects/${projectData.preview}`}
            />
          </div>
          <div className="col-span-4 col-start-2 row-start-6">
            <p>
              {dataProject}
            </p>
          </div>
      </div>
    </div>
  );
}

export default ProjectPage;