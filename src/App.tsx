import About from "./components/About";
import Projects from "./components/Projects";

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-custom-background-primary">
        <nav className=" text-custom-background-accent  border-b-2">
          <div className="content-container">
            <div className="flex justify-between ">
              <div>
                <h1 className="text-3xl"> Roy Kim </h1>
              </div>

              <div>
                <ul className="flex space-x-10 pt-2">
                  <li className="nav-items">
                    <Link to="/">Home</Link>
                  </li>

                  <li className="nav-items">
                    <Link to="/Projects">Projects</Link>
                  </li>

                  <li className="nav-items">
                    <Link to="/Resume">Resume</Link>
                  </li>

                  <li className="nav-items">
                    <Link to="/Contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<About />}></Route>
          <Route path="/Projects" element={<Projects />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
