import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { remove } from '../redux/books/bookSlice';

const Book = (props) => {
  const { id, title, author } = props;
  const dispatch = useDispatch();
  return (
    <>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <button
        onClick={() => {
          dispatch(remove(id));
        }}
        type="button"
      >
        Delete
      </button>
    </>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
