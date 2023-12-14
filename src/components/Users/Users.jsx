import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await axios("https://jsonplaceholder.typicode.com/users");
    setUsers(response.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <div key={user.id}>
          <NavLink to={`/users/${user.id}`}>{user.name}</NavLink>
        </div>
      ))}
    </div>
  );
};

export default Users;
