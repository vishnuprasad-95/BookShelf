import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookList = (props) => {
  const { books, activeBook, setActiveBook } = useContext(BookContext);

  return books.length ? (
    <ul className="booklist">
      {books.map(book => {
        return (
          <li key={book.id} className={`booklist__item ${book.id === activeBook ? 'booklist__item--active': ''}`} onClick={() => setActiveBook(book.id)}>
            { book.title } 
          </li>
        )
      })}
    </ul>
  ) : (
    <div>Super Man book illa</div>
  )
}

export default BookList;