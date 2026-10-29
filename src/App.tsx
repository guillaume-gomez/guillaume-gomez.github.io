import { BrowserRouter, Routes, Route } from "react-router";
import RouteWithQueryStringParams from "./components/RouteWithQueryStringParams";

import "./i18n";
import AnimationLayout from "./components/AnimationLayout";

function App() {
  
  return (
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
  )
}

export default App;
