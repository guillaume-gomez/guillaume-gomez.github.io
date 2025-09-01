import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";
import RouteWithQueryStringParams from "./components/RouteWithQueryStringParams";
import './index.css';

import "./i18n";
import AnimationLayout from "./components/AnimationLayout";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AnimationLayout>
        <Routes>
          <Route
            path="/"
            element={<RouteWithQueryStringParams />}
          />
        </Routes>
      </AnimationLayout>
    </BrowserRouter>
  </StrictMode>,
)
