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
    const keys = Object.keys(booklist[0]);
    const dis = [];
    keys.forEach((object) => {
      dis.push({
        id: object,
        author: booklist[0][object][0].author,
        title: booklist[0][object][0].title,
      });
    });
    content = dis.map((book) => (
      <Book
        key={book.id}
        title={book.title}
        author={book.author}
        id={book.id}
      />
    ));
  } else if (booksStatus === 'failed') {
    content = <p>{error}</p>;
  }

  return (
    <>
      <h1>Book List</h1>
      {content}
      <Form />
    </>
  );
};

export default Books;
