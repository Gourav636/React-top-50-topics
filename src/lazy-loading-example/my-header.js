import React from "react";
import { Link } from "react-router-dom";

function MyHeader() {
  return (
    <div>
      <nav>
        <Link to="./home.js">Home</Link>
        <Link to="./about.js">About</Link>
      </nav>
    </div>
  );
}

export default MyHeader;
