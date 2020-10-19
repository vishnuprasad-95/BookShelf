import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';
import constants from '../constants/bookList';

const EditForm = ({
    updateEdit
}) => {
    const { dispatch, books, activeBook } = useContext(BookContext);
    const currentBook = activeBook ? books.find(book => book.id === activeBook ) : books[0];
    const [title, setTitle] = useState(currentBook.title);
    const [author, setAuthor] = useState(currentBook.author);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (!title || !author) return;
        // addBook(title, author);
        dispatch({
            type: constants.EDIT_BOOK,
            book: {
                title, author, id: currentBook.id
            }
        })
        updateEdit(null);
    };

    return (
        <div className="edit-form">
            <h2 className="edit-form__head">{currentBook.title}</h2>
            <form onSubmit={onSubmitHandler} className="edit-from__wrapper">
                <div className="edit-form__group">
                    <label className="edit-from__label" htmlFor="title">Book Title</label>
                    <input className="edit-from__input" id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder={title} />
                </div>
                <div className="edit-form__group">
                    <label className="edit-from__label" htmlFor="author">Author</label>
                    <input className="edit-from__input" id="author" type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder={author} />
                </div>
                <input className="edit-from__button" type="submit"></input>
            </form>
        </div>
    );
}

export default EditForm;