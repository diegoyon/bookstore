import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/bookSlice';
import categoriesReducer from './categories/categories';

const store = configureStore({ reducer: { books: bookReducer, categories: categoriesReducer } });

export default store;
