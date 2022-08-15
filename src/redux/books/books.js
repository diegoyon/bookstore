// Initial State
const defaultState = [
  {
    title: 'Harry Potter',
    author: 'J.K. Rowling',
    id: '1',
  },
  {
    title: 'Lord of the Rings',
    author: 'J.R.R. Tolkien',
    id: '2',
  },
];

// Actions
const CREATE = 'CREATE';
const REMOVE = 'REMOVE';

// Reducer
export default function booksReducer(state = defaultState, action = {}) {
  switch (action.type) {
    case CREATE:
      return state.concat(action.book);
    case REMOVE:
      return state.filter((book) => book.id !== action.book.id);
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
