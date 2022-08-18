import { useState, React } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addNewBook } from '../redux/books/booksSlice';
import './Form.css';

const Form = () => {
  const [titleInput, setTitleInput] = useState('');
  const [authorInput, setAuthorInput] = useState('');
  const dispatch = useDispatch();

  return (
    <>
      <div className="form">
        <h1>Add new book</h1>
        <div className="form-container">
          <input type="text" name="title" placeholder="Book title" value={titleInput} onInput={(e) => setTitleInput(e.target.value)} />
          <input type="text" name="author" placeholder="Author" value={authorInput} onInput={(e) => setAuthorInput(e.target.value)} />
          <button
            onClick={() => {
              dispatch(addNewBook({
                item_id: uuidv4(), title: titleInput, author: authorInput, category: 'Fiction',
              }));
              setTitleInput('');
              setAuthorInput('');
            }}
            type="submit"
          >
            ADD BOOK
          </button>
        </div>
      </div>
    </>
  );
};

export default Form;
