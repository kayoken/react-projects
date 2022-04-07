import { useState } from "react";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Paint from "./components/Paint";
import Transitions from "./components/Transition";

import "./App.scss";

function App() {
  return (
    <Router>
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
      </Routes>
    </Router>
  );
}

export default App;
