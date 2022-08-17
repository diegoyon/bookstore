// import { useEffect, React } from 'react';
import { React } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
// import { fetchBooks } from '../redux/books/books';
// import Book from '../components/Book';
import Form from '../components/Form';

const Books = () => {
  const booklist = useSelector((state) => state.books);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchBooks());
  // }, []);

  console.log(booklist);

  return (
    <>
      <h1>Book List</h1>
      <p>{JSON.stringify(booklist.item1)}</p>
      {/* {Object.keys(booklist).forEach((key) => (
        <Book
          key={key}
          title={booklist[key][0].title}
          author={booklist[key][0].author}
          id={booklist[key][0].id}
        />
      ))} */}
      {/* {booklist.map((book) => (
        <Book
          key={book.title}
          title={book.title}
          author={book.author}
          id={book.id}
        />
      ))} */}
      <Form />
    </>
  );
};

export default Books;
