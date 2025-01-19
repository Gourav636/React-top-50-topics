import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Users from "./Users";
import UserDetail from "./UserDetail";

function DynamicRouting() {
  return (
    <div>
      <nav>
        <Link to="/users">Users</Link>
      </nav>

      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetail />} />
      </Routes>
    </div>
  );
}

export default DynamicRouting;
