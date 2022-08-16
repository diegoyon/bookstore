// import { createAsyncThunk } from '@reduxjs/toolkit';
import Axios from 'axios';
// const fetchBooks = createAsyncThunk(
//   'fetchBooks',
//   async () => {
//     const response = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/LBqO0RnKgQ1tgzEIoMmX/books');
//     return response.data;
//   },
// );
// Initial State
const defaultState = [];
// const defaultState = [
//   {
//     title: 'Harry Potter',
//     author: 'J.K. Rowling',
//     id: '1',
//   },
//   {
//     title: 'Lord of the Rings',
//     author: 'J.R.R. Tolkien',
//     id: '2',
//   },
// ];

// Actions
const CREATE = 'CREATE';
const REMOVE = 'REMOVE';
const GET_BOOKS = 'GET_BOOKS';

// Reducer
export default function booksReducer(state = defaultState, action = {}) {
  switch (action.type) {
    case CREATE:
      return state.concat(action.book);
    case REMOVE:
      return state.filter((book) => book.id !== action.book.id);
    case GET_BOOKS:
      return action.payload;
    default:
      return state;
  }
}

// Action Creators
export function createBook(book) {
  return { type: CREATE, book };
}

export function removeBook(book) {
  return { type: REMOVE, book };
}

export const fetchBooks = () => (
  async (dispatch) => {
    const res = await Axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/LBqO0RnKgQ1tgzEIoMmX/books');
    // const jsonResponse = await res.json();
    console.log(res.data);
    dispatch({
      type: GET_BOOKS,
      payload: res.data,
    });
  }
);

// export const getBooks = () => async (dispatch) => {
//   try {
//     const res = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/LBqO0RnKgQ1tgzEIoMmX/books');
//     dispatch({ type: GET_BOOKS, payload: res.data });
//   } catch (err) {
//     console.log(err);
//   }
// };

// export const getBooks = () => ((dispatch) => (
//   fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/LBqO0RnKgQ1tgzEIoMmX/books').then(
//     (payload) => dispatch({ type: GET_BOOKS, payload }),
//   )
// )
// );
