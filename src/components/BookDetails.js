import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';
import Icon from './common/Icon';
import EditBook from './EditBook';

const BookDetails = () => {
  const { books, activeBook } = useContext(BookContext);

  const currentBook = activeBook ? books.find(book => book.id === activeBook ) : books[0];
  console.log("BookDetails -> currentBook", currentBook.id)
  const [edit, setEdit] = useState(null);

  const updateEdit = (edit) => {
    setEdit(edit);
  }

  if (edit) {
    return (
      <EditBook updateEdit={updateEdit} />
    );
  }
  return (
    <div className="book-detail">
      <button className="book-detail__button " onClick={(e) => {
        updateEdit(currentBook.id);
      }}>
        <Icon name="edit" size="20px" color="black" />
      </button>
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