import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import UserComponent from "./user-api";

function UserDetail() {
  const { id } = useParams();
  const [user, SetUser] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const data = await response.json();
      SetUser(data);
    };

    fetchUserDetails();
    return () => {
      console.log("clean user data}");
    };
  }, [id]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div>
        <fieldset>
          <legend>User Detail</legend>
          <p>
            <div>Name: {user.name}</div>
            <div>UserName: {user.username}</div>
            <div>Phone no : {user.phone}</div>
            <div>Home Town: {user.address.city}</div>
            <div>Company: {user.company.name}</div>
          </p>
          <div>
            <Link to="/use-effect-cleanup" element={<UserComponent />}>
              User Component
            </Link>
          </div>
        </fieldset>
      </div>
    </div>
  );
}

export default UserDetail;
