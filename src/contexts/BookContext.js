import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { id: uuidv4(), title: 'Preveen Book', author:'Mandan Knappan' },
    { id: uuidv4(), title: 'Anjali Book', author:'GDG anenna vijaram' },
    { id: uuidv4(), title: 'Ajay Book', author:'CSS konandrarr' },
  ]);

  const [activeBook, setActiveBook] = useState(books[0].id);

  const addBook = (title, author) => {
    setBooks([ ...books, {
      id: uuidv4(), title, author
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