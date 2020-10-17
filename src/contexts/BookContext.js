import React, { createContext, useReducer, useState, useEffect } from 'react';
import { bookReducer, initialState } from '../reducers/bookReducer';
import utilsHelper from '../helpers/utilHelper';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem('books');
    return localData ? utilsHelper.getParseData(localData): initialState;
  });

  const [activeBook, setActiveBook] = useState(1);
  // useEffect(() => {
  //   dispatch({ type: constants.SET_ACTIVE_BOOK, id: null })
  // }, []);

  useEffect(() => {
    localStorage.setItem('books', utilsHelper.getStringifyData(books));
  }, [books]);

  return(
    <BookContext.Provider value={{books, activeBook, setActiveBook, dispatch}}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider;