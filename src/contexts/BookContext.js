import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { id: 1, title: 'Preveen Book', author:'Mandan Knappan' },
    { id: 2, title: 'Anjali Book', author:'GDG anenna vijaram' },
    { id: 3, title: 'Ajay Book', author:'CSS konandrarr' },
  ]);

  const [activeBook, setActiveBook] = useState(1);

  const addBook = (title, author) => {
    setBooks([ ...books, {
      title, author
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