import React, { useContext } from 'react';
import { BookContext } from '../../contexts/BookContext';
import constants from '../../constants/bookList';
import List from './views/List';

const BookList = (props) => {
  const { books, activeBook, setActiveBook, setEditBook, dispatch } = useContext(BookContext);

  return (
    <List
      list={books}
      activeItemId={activeBook}
      onClick={(item) => setActiveBook(item.id)}
      onDeleteClick={(item) => dispatch({ type: constants.REMOVE_BOOK, id: item.id })}
      onEditClick={(item) => setEditBook(item)} />
  );
};

export default BookList;