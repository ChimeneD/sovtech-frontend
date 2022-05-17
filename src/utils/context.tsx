import React from 'react';

type ContextProp = {
  darkMode?: boolean;
  toggleDarkMode?: () => void;
};

//creating context
export const ContextAPI = React.createContext<ContextProp>({});
