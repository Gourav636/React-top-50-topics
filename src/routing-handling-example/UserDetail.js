import React from "react";
import { useParams } from "react-router-dom";

function UserDetail() {
  const { id } = useParams();
  return <h3>User Detail for User ID: {id}</h3>;
}

export default UserDetail;
