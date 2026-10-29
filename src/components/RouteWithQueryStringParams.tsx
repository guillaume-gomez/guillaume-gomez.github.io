import Home from "../pages/Home";
import ProjectPage from "../pages/ProjectPage";
import { useSearchParams } from "react-router-dom";
import { projectsData } from "../constants"; 

function RouteWithQueryStringParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  const projectName = searchParams.get("project");

  if(!projectName) {
    return <Home />;
  }

  const projectData = projectsData.find(projectData => projectData.internalLink === projectName);

  if(!projectData) {
    return <Home />;
  }


  return (
    <ProjectPage projectData={projectData} />
  )
}

export default RouteWithQueryStringParams;