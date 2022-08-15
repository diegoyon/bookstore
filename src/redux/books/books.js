// Initial State
const defaultState = [
  {
    id: 1,
    title: 'Harry Potter',
    author: 'J.K. Rowling',
  },
  {
    id: 2,
    title: 'Lord of the Rings',
    author: 'J.R.R. Tolkien',
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
      return state.filter((book) => JSON.stringify(book) !== JSON.stringify(action.book));
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
