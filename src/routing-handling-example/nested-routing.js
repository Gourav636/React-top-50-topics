import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./home";
import Contact from "./contact";
import About from "./about";
import Dashboard from "./dashboard";

function NestedRouting() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default NestedRouting;
