import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav>
        <Link to="">Home</Link>
        <Link to="About">About</Link>
      </nav>
    </div>
  );
}

export default Header;
