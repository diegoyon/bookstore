import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import './Book.css';

const Book = (props) => {
  const {
    id, title, author, category,
  } = props;
  const dispatch = useDispatch();
  return (
    <>
      <div className="book-card">
        <div className="first-column">
          <div className="details">
            <h1>{category}</h1>
            <h2>{title}</h2>
            <h3>{author}</h3>
          </div>
          <div className="buttons">
            <button type="button">Comments</button>
            <button
              onClick={() => {
                dispatch(removeBook(id));
              }}
              type="button"
            >
              Remove
            </button>
            <button type="button">Edit</button>
          </div>
        </div>
        <div className="second-column">
          <p>progress image</p>
          <div className="progress">
            <h1>64%</h1>
            <h2>Completed</h2>
          </div>
        </div>
        <div className="third-column">
          <h1>CURRENT CHAPTER</h1>
          <h2>Chapter 17: `&quot;`A Lesson Learned`&quot;`</h2>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
