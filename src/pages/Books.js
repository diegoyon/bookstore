import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Form';
import {
  selectAllBooks,
  getBooksStatus,
  getBooksError,
  fetchBooks,
} from '../redux/books/booksSlice';
import './Books.css';

const Books = () => {
  const dispatch = useDispatch();

  const booklist = useSelector(selectAllBooks);
  const booksStatus = useSelector(getBooksStatus);
  const error = useSelector(getBooksError);
  useEffect(() => {
    if (booksStatus === 'idle') {
      dispatch(fetchBooks());
    }
  }, [booksStatus, dispatch]);

  let content;

  if (booksStatus === 'loading') {
    content = <p>Loading...</p>;
  } else if (booksStatus === 'succeeded') {
    content = booklist.map((book) => (
      <Book
        key={book.id}
        title={book.title}
        author={book.author}
        category={book.category}
        id={book.id}
      />
    ));
  } else if (booksStatus === 'failed') {
    content = <p>{error}</p>;
  }

  return (
    <>
      <div className="booksArea">
        {content}
      </div>
      <Form />
    </>
  );
};

export default Books;
