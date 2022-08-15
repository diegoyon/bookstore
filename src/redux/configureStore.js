import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

/* eslint-disable no-unused-vars */
const store = configureStore({ booksReducer, categoriesReducer });
