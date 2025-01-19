import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav>
        <Link to="./Home.js">Home</Link>
        <Link to="./About.js">About</Link>
      </nav>
    </div>
  );
}

export default Header;
