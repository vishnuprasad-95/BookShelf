import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const AddForm = () => {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addBook(title, author);
    setTitle('');
    setAuthor('');
  };
  
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)}/>
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default AddForm;