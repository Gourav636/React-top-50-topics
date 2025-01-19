import React from "react";
import { Link } from "react-router-dom";

function Users() {
  const userList = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Bob Johnson" },
  ];

  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {userList.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
