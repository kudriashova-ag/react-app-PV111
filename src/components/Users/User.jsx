import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
    const {id} = useParams();

    const [user, setUser] = useState(null);

    const getUser = async () => {
      const response = await axios(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      setUser(response.data);
    };

    useEffect(() => {
      getUser();
    }, [id]);

    if (user === null)
        return 'Loading...';

    return (
        <div>
            <h1>User {user.name}</h1>
            <div>{user.email}</div>
            <div>{user.phone}</div>
        </div>
    );
}

export default User;
