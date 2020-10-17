import { v4 as uuid } from 'uuid';
import constants from '../constants/bookList';

export const bookReducer = (state, action) => {
  switch (action.type){
    case constants.ADD_BOOK:
      return [
        ...state,
        {
          title: action.book.title,
          author: action.book.author,
          id: uuid(),
        }
      ]
    case constants.REMOVE_BOOK:
      return state.filter(book => book.id !== action.id);
    default:
      return state;
  }
}