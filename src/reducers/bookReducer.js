import { v4 as uuid } from 'uuid';
import constants from '../constants/bookList';

export const initialState = [
  { title: 'Hello', author: 'test', id: 1 },
];

export const bookReducer = (state = initialState, action) => {
  switch (action.type){
    case constants.ADD_BOOK:
      console.log(action);
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
    case constants.SET_ACTIVE_BOOK:
      return action.id;
    default:
      return state;
  }
}