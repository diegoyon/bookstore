import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Form';

const Books = () => {
  const booklist = useSelector((state) => state.books.books);
  // console.log(booklist);
  return (
    <>
      <h1>Book List</h1>
      {booklist.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          id={book.id}
        />
      ))}
      <Form />
    </>
  );
};

export default Books;
