import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import constants from '../constants/bookList';
import Icon from './common/Icon';

const BookList = (props) => {
  const { books, activeBook, setActiveBook, dispatch } = useContext(BookContext);

  return books.length ? (
    <ul className="booklist">
      {books.map(book => {
        return (
          <li key={book.id} className={`booklist__item ${book.id === activeBook ? 'booklist__item--active' : ''}`} onClick={() => setActiveBook(book.id)}>
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
  ) : (
      <div>Super Man book illa</div>
    )
}

export default BookList;