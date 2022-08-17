import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

export const fetchBooksThunk = createAsyncThunk('users.fetchBooksThunk', async () => {
  try {
    const response = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/LBqO0RnKgQ1tgzEIoMmX/books');
    return [...response.data];
  } catch (err) {
    return err.message;
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchBooksThunk.fulfilled, (state, action) => (
      action.payload
    ));
  },
});

// export const selectAllBooks = (state) = state.books;

export default booksSlice.reducer;
