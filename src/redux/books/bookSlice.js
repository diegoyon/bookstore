import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    /* eslint-disable */
    create: (state, action) => {
      state.books = state.books.concat(action.payload);
    },
    remove: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

export const { create, remove } = bookSlice.actions;

export default bookSlice.reducer;
