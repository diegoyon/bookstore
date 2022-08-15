// Actions
const CHECK_STATUS = 'CHECK_STATUS';

// Reducer
export default function categoriesReducer(state = [], action = {}) {
  switch (action.type) {
    case CHECK_STATUS:
      return action.payload;
    default:
      return state;
  }
}

// Action Creators
export function checkStatus() {
  return { type: CHECK_STATUS, payload: 'Under construction' };
}
