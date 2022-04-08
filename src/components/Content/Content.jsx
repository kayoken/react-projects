import { useEffect, useState } from "react";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";

import NotFound from "../NotFound";
import Paint from "../Paint";
import Transitions from "../Transition";
import CustomHookPage from "../CustomHookPage";

const Content = () => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  // useEffect(() => {
  //   if (location !== displayLocation) {
  //     setTransistionStage("fadeOut");
  //   }
  // }, [location, displayLocation]);

  //not changing the location until explicit state change
  return (
    // <Routes location={displayLocation}>
    <Routes>
      <Route
        path="/"
        element={
          <div className="App">
            <header className="App-header">
              <Link className="App-link" to="/paint">
                Paint
              </Link>
              <Link className="App-link" to="/transitions">
                Transitions
              </Link>
              <Link className="App-link" to="/custom-hooks">
                CustomHooks
              </Link>
            </header>
          </div>
        }
      ></Route>
      <Route path="/paint" element={<Paint />}></Route>
      <Route path="/transitions" element={<Transitions />}></Route>
      <Route path="/custom-hooks" element={<CustomHookPage />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default Content;
