import React from "react";

const Book = (props) => {
  return (
    <>
     <h2>{props.title}</h2>
     <h3>{props.author}</h3>
     <button type="button">Delete</button>
    </>
  )
}

export default Book;