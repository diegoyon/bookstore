import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Form';
import { selectAllBooks, fetchBooks } from '../redux/books/bookSlice';

const Books = () => {
  const dispatch = useDispatch();
  const booklist = useSelector(selectAllBooks);

  const bookStatus = useSelector((state) => state.books.status);
  const error = useSelector((state) => state.books.error);

  useEffect(() => {
    if (bookStatus === 'idle') {
      dispatch(fetchBooks());
    }
  }, [bookStatus, dispatch]);

  let content;
  const display = [];

  if (bookStatus === 'loading') {
    content = <p>Loading...</p>;
  } else if (bookStatus === 'succeeded') {
    const keys = Object.keys(booklist[0]);
    keys.forEach((key) => {
      display.push({
        id: key,
        title: booklist[0][key][0].title,
        author: booklist[0][key][0].author,
      });
    });
    content = display.map((book) => (
      <Book
        key={book.id}
        title={book.title}
        author={book.author}
        id={book.id}
      />
    ));
    // const obj = Object.assign([], booklist);
    // obj[0]['232something'] = [{ a: 3 }];
    // console.log(obj[0]);
    // console.log(JSON.stringify(booklist.push({
    //   '385db550-2a5b-4e9d-83ba-d11f12b28715': [{
    //     title: 'sometitle',
    //     author: 'someauthor',
    //   }],
    // })));
  } else if (bookStatus === 'failed') {
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
