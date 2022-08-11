import React from "react";

const Form = () => {
  return (
    <>
      <h1>Add new book</h1>
      <input type="text" name="title" />
      <input type="text" name="author" />
      <button type="submit">Submit</button>
    </>
  )
}

export default Form;