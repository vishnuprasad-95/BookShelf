import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import Icon from './common/Icon';

const BookList = (props) => {
  const { books, activeBook, setActiveBook, removeBook } = useContext(BookContext);

  return books.length ? (
    <ul className="booklist">
      {books.map(book => {
        return (
          <li key={book.id} className={`booklist__item ${book.id === activeBook ? 'booklist__item--active' : ''}`} onClick={() => setActiveBook(book.id)}>
            <div className="booklist__title">
              {book.title}
            </div>
            <button className="booklist__button" onClick={(e) => {
              removeBook(book.id)
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