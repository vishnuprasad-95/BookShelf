import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';
import constants from '../constants/theme';

const TopNav = () => {
  const { books } = useContext(BookContext);
  const { theme, dispatch } = useContext(ThemeContext);

  const { isLightTheme } = theme;

  const toggleTheme = () => {
    dispatch({ type: constants.SWITCH_THEME });
  }

  return (
    <div className="navbar">
      <h1 className="navbar__header">Boooks</h1>
      <label className="switch" style={{right: 60}}>
        <input type="checkbox" onChange={() => toggleTheme()} checked={!isLightTheme} />
        <span className="slider"></span>
      </label>
      <p className="navbar__counter">{books.length}</p>
    </div>
  );
}

export default TopNav;