import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const TopNav = () => {
  const { books } = useContext(BookContext);

  return (
    <div className="navbar">
      <h1 className="navbar__header">Boooks</h1>
      <p className="navbar__counter">{books.length}</p>
    </div>
  );
}

export default TopNav;