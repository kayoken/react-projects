import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";

import NotFound from "../NotFound";
import Paint from "../Paint";
import Transitions from "../Transition";

const Content = () => {
  const location = useLocation();

  console.log(location);

  return (
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
            </header>
          </div>
        }
      ></Route>
      <Route path="/paint" element={<Paint />}></Route>
      <Route path="/transitions" element={<Transitions />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default Content;
