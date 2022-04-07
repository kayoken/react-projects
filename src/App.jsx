import { useState } from "react";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Paint from "./components/Paint";

import "./App.css";

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
              </header>
            </div>
          }
        ></Route>
        <Route path="/paint" element={<Paint />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
