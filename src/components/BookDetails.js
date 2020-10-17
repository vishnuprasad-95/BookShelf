import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetails = () => {
  const { books, activeBook } = useContext(BookContext);

  const currentBook = books.find(book => book.id === activeBook);

  return (
    <div className="bookdetail">
      {currentBook.title}
    </div>
  );
}

export default BookDetails;