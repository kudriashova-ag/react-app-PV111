import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';
import { themeContext } from '../../contexts/themeContext';
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FormDialog from './FormDialog';


const Header = () => {
  const { theme, toggleTheme } = useContext(themeContext);


    return (
      <div>
        <div className={styles.navbar}>
          <NavLink className={styles.link} to="/">
            Home
          </NavLink>
          <NavLink className={styles.link} to="/counter">
            Counter
          </NavLink>
          <NavLink className={styles.link} to="/todo">
            Todo
          </NavLink>
          <NavLink className={styles.link} to="/users">
            Users
          </NavLink>
        </div>

        <div onClick={toggleTheme}>
          {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        </div>

        <FormDialog />
        
      </div>
    );
}

export default Header;
