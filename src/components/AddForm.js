import React, { useContext, useState, useEffect } from 'react';
import { BookContext } from '../contexts/BookContext';
import constants from '../constants/bookList';

const AddForm = () => {
  const { dispatch, editBook, setEditBook } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    if (editBook.edit) {
      setTitle(editBook.editBook.title);
      setAuthor(editBook.editBook.author);
    }
  }, []);

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
      setEditBook({
        edit: false,
        editBook: {
          title: '',
          author: '',
          id: null
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="add-form__group">
          <label className="add-from__label" htmlFor="author">Author</label>
          <input className="add-from__input" id="author" type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        {editBook.edit &&
          <label className="add-from__label"
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