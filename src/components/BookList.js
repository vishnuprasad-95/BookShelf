import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import constants from '../constants/bookList';
import Icon from './common/Icon';

const BookList = (props) => {
  const { books, activeBook, setActiveBook, dispatch } = useContext(BookContext);

  return (
    <ul className="booklist">
      {books.map((book, index) => {
        let setActive;
        if (activeBook) {
          setActive = (book.id === activeBook);
        } else {
          setActive = (index === 0);
        }
        return (
          <li key={book.id} className={`booklist__item ${setActive ? 'booklist__item--active' : ''}`} onClick={() => setActiveBook(book.id)}>
            <div className="booklist__title">
              {book.title}
            </div>
            <button className="booklist__button" onClick={(e) => {
              const deleteBookId = (activeBook === book.id) ? null : activeBook;
              dispatch({ type: constants.REMOVE_BOOK, id: book.id });
              e.stopPropagation();
            }}>
              <Icon name="delete" size="16px" color="white" />
            </button>
          </li>
        )
      })}
    </ul>
  );
};

export default BookList;