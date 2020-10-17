import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetails = () => {
  const { books, activeBook } = useContext(BookContext);

  const currentBook = books.find(book => book.id === activeBook);

  return (
    <div className="book-detail">
      { currentBook
        ? <>
          <div className="book-detail__title">
            {currentBook.title}
          </div>
          <div className="book-detail__author">
            {currentBook.author}
          </div>
        </>
        : <div className="book-detail__no-book">No book selected</div>
      }
    </div>
  );
}

export default BookDetails;