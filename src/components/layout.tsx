import React, { useState } from 'react';
import { CssBaseline, IconButton, ThemeProvider } from '@mui/material';
import { MdOutlineWbSunny } from 'react-icons/md';
import { BiMoon } from 'react-icons/bi';
import { lightTheme, darkTheme } from '../styles/theme';
import { ContextAPI } from '../utils/context';

type ParentProps = {
  children: any;
};
const Layout: React.FC<ParentProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <ContextAPI.Provider
        value={{ darkMode: darkMode, toggleDarkMode: toggleDarkMode }}
      >
        <section style={{ padding: 10 }}>
          {darkMode ? (
            <IconButton
              onClick={toggleDarkMode}
              color='primary'
              style={{ position: 'fixed', right: 10, top: 10 }}
              size='small'
            >
              <MdOutlineWbSunny />
            </IconButton>
          ) : (
            <IconButton
              onClick={toggleDarkMode}
              color='primary'
              style={{ position: 'fixed', right: 10, top: 10 }}
              size='small'
            >
              <BiMoon />
            </IconButton>
          )}
          <main>{children}</main>
        </section>
      </ContextAPI.Provider>
    </ThemeProvider>
  );
};

export default Layout;
