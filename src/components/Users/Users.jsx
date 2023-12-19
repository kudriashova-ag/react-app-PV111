import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useSearchParams();
  const [searchText, setSearchText] = useState(search.get('q') || '');

  const getUsers = async () => {
    const response = await axios("https://jsonplaceholder.typicode.com/users");
    setUsers(response.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const searchHandler = (e) => {
      setSearchText(e.target.value);
      setSearch({ q: e.target.value });
  };

  return (
    <div>
      <h1>Users</h1>

      <input type="text" value={searchText} onChange={searchHandler} />

      {users
        .filter((user) => user.name.toLowerCase().includes(searchText.toLowerCase()))
        .map((user) => (
          <div key={user.id}>
            <NavLink to={`/users/${user.id}`}>{user.name}</NavLink>
          </div>
        ))}

      <Outlet />
    </div>
  );
};

export default Users;
