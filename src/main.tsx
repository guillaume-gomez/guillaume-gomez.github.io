import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";
import { projectsData } from "./constants"; 
import './index.css';

import "./i18n";
import App from './App.tsx';
import ProjectPage from "./ProjectPage";
import AnimationLayout from "./components/AnimationLayout";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AnimationLayout>
        <Routes>
          <Route
            path="/"
            element={<App />}
          />
          {
            projectsData.map(projectData => 
              (
                <Route
                  path={`${projectData.internalLink}`}
                  element={<ProjectPage projectData={projectData} />}
                />
              )
            )
          }
        </Routes>
      </AnimationLayout>
    </BrowserRouter>
  </StrictMode>,
)
