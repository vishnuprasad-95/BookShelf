import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';
import constants from '../constants/bookList';

const AddForm = () => {
  const { dispatch, editBook, setEditBook } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleChange = (field, value) => {
    let book = { ...editBook };
    book.editBook[field] = value;
    if (editBook.edit) {
      const { title, author } = book.editBook;
      setEditBook(book);
      setTitle(title);
      setAuthor(author);
    } else {
      field === 'title' ?
        setTitle(value) : setAuthor(value);
    }
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!title || !author) return;
    if (editBook.edit) {
      dispatch({
        type: constants.EDIT_BOOK,
        book: {
          title, author, id: editBook.editBook.id
        }
      });
    } else {
      dispatch({
        type: constants.ADD_BOOK,
        book: {
          title, author
        }
      })
    }
    setEditBook({
      edit: false,
      editBook: {
        title: '',
        author: '',
        id: null
      }
    });
    setTitle('');
    setAuthor('');
  };

  const header = editBook.edit ? 'Edit Book' : 'Add new Book';
  return (
    <div className="add-from">
      <h2 className="add-form__head">{header}</h2>
      <form onSubmit={onSubmitHandler} className="add-from__wrapper">
        <div className="add-form__group">
          <label className="add-from__label" htmlFor="title">Book Title</label>
          <input className="add-from__input" id="title" type="text"
            value={title || editBook.editBook.title}
            onChange={(e) => handleChange('title', e.target.value)}
          />
        </div>
        <div className="add-form__group">
          <label className="add-from__label" htmlFor="author">Author</label>
          <input className="add-from__input" id="author" type="text"
            value={author || editBook.editBook.author}
            onChange={(e) => handleChange('author', e.target.value)}
          />
        </div>
        {editBook.edit &&
          <label className="add-from__cancel"
            onClick={() => {
              setEditBook({
                edit: false,
                editBook: {
                  title: '',
                  author: '',
                  id: null
                }
              });
            }}
          > Cancel</label>
        }
        <input className="add-from__button" type="submit" value={editBook.edit ? 'Update' : 'Submit'}></input>
      </form>
    </div>
  );
}

export default AddForm;