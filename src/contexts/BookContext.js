import React, { createContext, useReducer, useState } from 'react';
import { bookReducer } from '../reducers/bookReducer';
import { v4 as uuid } from 'uuid';

export const BookContext = createContext();

const initialState = [
  { id: uuid(), title: 'Preveen Book', author:'Mandan Knappan' },
  { id: uuid(), title: 'Anjali Book', author:'GDG anenna vijaram' },
  { id: uuid(), title: 'Ajay Book', author:'CSS konandrarr' },
]

const BookContextProvider = (props) => {
  const [books, setBooks] = useState(initialState);

  const [activeBook, setActiveBook] = useState(books[0].id);

  const addBook = (title, author) => {
    setBooks([ ...books, {
      id: uuid(), title, author
    }]);
  };

  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  return(
    <BookContext.Provider value={{books, addBook, removeBook, activeBook, setActiveBook}}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider;