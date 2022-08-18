/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BOOKS_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/LBqO0RnKgQ1tgzEIoMmX/books';

export const fetchBooks = createAsyncThunk(
  'users/fetchBooks',
  async () => {
    try {
      const response = await axios.get(BOOKS_URL);
      return response.data;
    } catch (err) {
      return err.message;
    }
  },
);

export const addNewBook = createAsyncThunk(
  'books/addNewBook',
  async (newBook) => {
    try {
      const response = await axios.post(BOOKS_URL, newBook);
      return response.data;
    } catch (err) {
      return err.message;
    }
  },
);

export const removeBook = createAsyncThunk(
  'books/removeBook',
  async (bookId) => {
    try {
      const response = await axios.delete(`${BOOKS_URL}/${bookId}`);
      return response.data;
    } catch (err) {
      return err.message;
    }
  },
);

const initialState = {
  books: [],
  status: 'idle',
  error: null,
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = state.books.concat(action.payload);
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addNewBook.fulfilled, () => {
        window.location.reload(false);
      })
      .addCase(removeBook.fulfilled, () => {
        window.location.reload(false);
      });
  },
});

export const selectAllBooks = (state) => state.books.books;
export const getBooksStatus = (state) => state.books.status;
export const getBooksError = (state) => state.books.error;

export default booksSlice.reducer;
