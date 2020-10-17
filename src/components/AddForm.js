import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const AddForm = () => {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if(!title || !author) return;
    addBook(title, author);
    setTitle('');
    setAuthor('');
  };
  
  return (
    <div className="add-from">
      <h2 className="add-form__head">Add ne book</h2>
      <form onSubmit={onSubmitHandler} className="add-from__wrapper">
        <div className="add-form__group">
        <label className="add-from__label" htmlFor="title">Book Title</label>
        <input className="add-from__input" id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div  className="add-form__group">
          <label className="add-from__label" htmlFor="author">Author</label>
          <input className="add-from__input" id="author" type="text" value={author} onChange={(e) => setAuthor(e.target.value)}/>
        </div>
        <input className="add-from__button" type="submit"></input>
      </form>
    </div>
  );
}

export default AddForm;