import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

const Header = () => {
    return (
      <div className={styles.navbar}>
        <NavLink className={styles.link} to="/">Home</NavLink>
        <NavLink className={styles.link} to="/counter">Counter</NavLink>
        <NavLink className={styles.link} to="/todo">Todo</NavLink>
        <NavLink className={styles.link} to="/users">Users</NavLink>
      </div>
    );
}

export default Header;
