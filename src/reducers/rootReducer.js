import { combineReducers } from 'redux';

import booksReducer from './booksReducer';
import userReducer from './userReducer';

export default combineReducers({
  booksReducer,
  userReducer
});

export const getBooks = state => state.booksReducer.books;
export const getBook = state => state.booksReducer.book;
