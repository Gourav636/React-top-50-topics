import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Example from "./example";
import Contact from "./contact";
function BasicRouting() {
  return (
      <div>
        <nav>
          <a href="/">Home</a> | <a href="/about">About</a> |{" "}
          <a href="/example">Example</a> | <a href="/contact">Contact</a>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/example" element={<Example />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
  );
}

export default BasicRouting;
