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
      console.log(response.data);
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
      console.log(response.data);
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
  reducers: {
    create: (state, action) => {
      state.books.concat(action.payload);
    },
    remove: (state, action) => {
      state.books.filter((book) => book.id !== action.payload.id);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.pending, (state) => {
        /* eslint-disable */
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = state.books.concat(action.payload);
        // state.books = [...state.books, ...Object.keys(action.payload)];
        // return action.payload
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addNewBook.fulfilled, (state, action) => {
        action.payload;
      })
  },
});

export const selectAllBooks = (state) => state.books.books;
export const getBooksStatus = (state) => state.books.status;
export const getBooksError = (state) => state.books.error;

export const { create, remove } = booksSlice.actions;

export default booksSlice.reducer;
