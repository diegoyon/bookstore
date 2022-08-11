import React from "react"
import Book from "./components/Book";
import Form from "./components/Form";

const Books = () => {
  const booklist = [
    {
      id: 1,
      title: "Harry Potter",
      author: "J.K. Rowling"
    },
    {
      id: 2,
      title: "Lord of the Rings",
      author: "J.R.R. Tolkien"
    }
  ]

  return(
    <>
      <h1>Book List</h1>
      {booklist.map((book)=>
        (<Book key={book.id} title={book.title} author={book.author} />)
      )}
      <Form />
    </>
  )
}

export default Books;