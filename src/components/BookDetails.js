import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';
import Icon from './common/Icon';
import EditBook from './EditBook';

const BookDetails = () => {
  const { books, activeBook } = useContext(BookContext);

  const currentBook = activeBook ? books.find(book => book.id === activeBook) : books[0];
  const [edit, setEdit] = useState(null);

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