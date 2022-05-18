import React from 'react';

type Character = {
  count?: string;
  next: string;
  previous: string;
  results?: any;
};

type ContextProp = {
  darkMode?: boolean;
  toggleDarkMode?: () => void;
  pageCount?: number;
  changePage: (count: any) => any;
  peopleData: Character;
  loading?: boolean;
  error?: any;
  //page url
  pageUrl?: any;
  //function to change page URL
  changePageURL: (changeTo: any) => any;
  changePeopleData: (newData: any) => any;
};

const defaultState = {
  changePage: (count: '') => {},
  changePageURL: (changeTo: '') => {},
  changePeopleData: (newData: '') => {},
  darkMode: localStorage.getItem('darkmode') === 'ON' ? true : false,
  peopleData: {
    next: '',
    previous: '',
  },
  pageUrl: {
    next: '',
    previous: '',
  },
};
//creating context
export const ContextAPI = React.createContext<ContextProp>(defaultState);
