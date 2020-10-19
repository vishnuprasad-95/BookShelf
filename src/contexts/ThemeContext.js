import React, { createContext, useReducer, useEffect } from 'react';
import { themeReducer, initialState } from '../reducers/themeReducer';
import utilsHelper from '../helpers/utilHelper';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [theme, dispatch] = useReducer(themeReducer, [], () => {
    const localData = localStorage.getItem('theme');
    return localData ? utilsHelper.getParseData(localData): initialState;
  });

  useEffect(() => {
    localStorage.setItem('theme', utilsHelper.getStringifyData(theme));
  }, [theme]);

  return(
    <ThemeContext.Provider value={{theme, dispatch}}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider;