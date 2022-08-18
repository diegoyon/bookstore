/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BOOKS_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/LBqO0RnKgQ1tgzEIoMmX/books';

const initialState = {
  books: [],
  status: 'idle',
  error: null,
};

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    const response = await axios.get(BOOKS_URL);
    return [response.data];
  },
);

export const addNewBook = createAsyncThunk(
  'books/addNewBook',
  // The payload creator receives the partial `{title, content, user}` object
  async (initialBook) => {
    // We send the initial data to the fake API server
    const response = await axios.post(BOOKS_URL, initialBook);
    // The response includes the complete post object, including unique ID
    return response.data;
  },
);

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    create: (state, action) => {
      state.books.concat(action.payload);
      console.log(action.payload);
      // state.books.push([action.payload]);
      // state.books = [action.payload];
    },
    remove: (state, action) => {
      // state.books = state.books.filter((book) => book.id !== action.payload);
      state.books.splice(state.books.findIndex((e) => e.id === action.payload.id), 1);
    },
  },
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
        console.log(action.payload.id);
      });
  },
});

export const { create, remove } = bookSlice.actions;

export default bookSlice.reducer;

export const selectAllBooks = (state) => state.books.books;
