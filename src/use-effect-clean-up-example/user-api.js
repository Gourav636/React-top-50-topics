import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./UserComponent.css"; // Assuming you saved your CSS here

function UserComponent() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError("Failed to fetch data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      console.log("Cleaning up data...");
    };
  }, []);

  if (loading) {
    return (
      <div className="container mt-5">
        <h3 className="loading-message">Loading users...</h3>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5">
        <h3>{error}</h3>
      </div>
    );
  }

  return (
    <div className="container mt-5" style={{ height: "auto" }}>
      <h1 className="text-center mb-4">User Details</h1>
      <div className="user-table">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>
                    <Link
                      to={`/user/${user.id}`}
                      className="text-decoration-none"
                    >
                      {user.name}
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserComponent;
