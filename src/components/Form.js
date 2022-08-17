import { useState, React } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { create } from '../redux/books/bookSlice';

const Form = () => {
  const [titleInput, setTitleInput] = useState('');
  const [authorInput, setAuthorInput] = useState('');
  const dispatch = useDispatch();
  return (
    <>
      <h1>Add new book</h1>
      <input type="text" name="title" value={titleInput} onInput={(e) => setTitleInput(e.target.value)} />
      <input type="text" name="author" value={authorInput} onInput={(e) => setAuthorInput(e.target.value)} />
      <button
        onClick={() => {
          dispatch(create({ title: titleInput, author: authorInput, id: uuidv4() }));
          setTitleInput('');
          setAuthorInput('');
        }}
        type="submit"
      >
        Submit
      </button>
    </>
  );
};

export default Form;
