import React, { useState } from 'react';
import { themeContext } from '../contexts/themeContext';

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => setTheme( theme === 'light' ? 'dark' : 'light' )
    return (
      <themeContext.Provider
        value={{ theme, toggleTheme }}
        >
        {children}
      </themeContext.Provider>
    );
}

export default ThemeProvider;
