import React, { useState, useEffect } from 'react';
import { CssBaseline, IconButton, ThemeProvider } from '@mui/material';
import { MdOutlineWbSunny } from 'react-icons/md';
import { BiMoon } from 'react-icons/bi';
import { lightTheme, darkTheme } from '../styles/theme';
import { ContextAPI } from '../utils/context';

import { useQuery } from '@apollo/client';
import { GET_ALL_PEOPLE } from '../queries/queries';

type ParentProps = {
  children: any;
};
const Layout: React.FC<ParentProps> = ({ children }) => {
  interface Character {
    count?: string;
    next: string;
    previous: string;
    results?: any;
  }
  interface URL {
    next: string;
    previous: string;
  }
  const { loading, error, data } = useQuery(GET_ALL_PEOPLE);
  const [peopleData, setPeopleData] = useState<Character>({
    count: '',
    next: '',
    previous: '',
    results: [],
  });
  const [pageUrl, setPageUrl] = useState<URL>({
    next: '',
    previous: '',
  });
  useEffect(() => {
    if (data) {
      setPeopleData(data.getAllPeople);
      setPageUrl({
        next: data.getAllPeople.next,
        previous: data.getAllPeople.previous,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  const [darkMode, setDarkMode] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkmode', !darkMode ? 'ON' : 'OFF');
  };

  const changePage = (countType: string) => {
    if (countType === 'increase') {
      setPageNumber(pageNumber + 1);
    }
    if (countType === 'decrease') {
      setPageNumber(pageNumber - 1);
    }
  };

  const changePageURL = (changeTo: any) => {
    setPageUrl(changeTo);
  };

  const changePeopleData = (newData: any) => {
    setPageUrl({ next: newData.next, previous: newData.previous });
    setPeopleData(newData);
  };
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <ContextAPI.Provider
        value={{
          darkMode: darkMode,
          toggleDarkMode: toggleDarkMode,
          pageCount: pageNumber,
          changePage: changePage,
          peopleData: peopleData,
          loading: loading,
          error: error,
          pageUrl: pageUrl,
          changePageURL: changePageURL,
          changePeopleData: changePeopleData,
        }}
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
