import { useState } from "react";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Content from "./components/Content/Content";

import "./App.scss";

function App() {
  return (
    <Router>
      <div>
        <Content />
      </div>
    </Router>
  );
}

export default App;
