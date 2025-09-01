import App from "../App";
import ProjectPage from "../pages/ProjectPage";
import { useSearchParams } from "react-router-dom";
import { projectsData } from "../constants"; 

function RouteWithQueryStringParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  const projectName = searchParams.get("project");

  if(!projectName) {
    return <App />;
  }

  const projectData = projectsData.find(projectData => projectData.internalLink === projectName);

  if(!projectData) {
    return <App />;
  }


  return (
    <ProjectPage projectData={projectData} />
  )
}

export default RouteWithQueryStringParams;