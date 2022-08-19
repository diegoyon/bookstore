/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BOOKS_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/LBqO0RnKgQ1tgzEIoMmX/books';

export const fetchBooks = createAsyncThunk(
  'users/fetchBooks',
  async () => {
    try {
      const response = await axios.get(BOOKS_URL);
      const booksObject = Object.entries(response.data).map(([id, response]) => {
        const { title, author, category } = response[0];
        return {
          id, title, author, category,
        };
      });
      return (booksObject);
    } catch (err) {
      return err.message;
    }
  },
);

export const addNewBook = createAsyncThunk(
  'books/addNewBook',
  async (newBook) => {
    try {
      await axios.post(BOOKS_URL, newBook);
      const id = newBook.item_id;
      delete newBook.item_id;
      return { ...newBook, id };
    } catch (err) {
      return err.message;
    }
  },
);

export const removeBook = createAsyncThunk(
  'books/removeBook',
  async (bookId) => {
    try {
      await axios.delete(`${BOOKS_URL}/${bookId}`);
      return bookId;
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
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addNewBook.fulfilled, (state, action) => {
        state.books = state.books.concat(action.payload);
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        state.books = state.books.filter((book) => book.id !== action.payload);
      });
  },
});

export const selectAllBooks = (state) => state.books.books;
export const getBooksStatus = (state) => state.books.status;
export const getBooksError = (state) => state.books.error;

export default booksSlice.reducer;
