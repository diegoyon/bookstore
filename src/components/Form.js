import { useState, React } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addNewBook, fetchBooks } from '../redux/books/bookSlice';

const Form = () => {
  const [titleInput, setTitleInput] = useState('');
  const [authorInput, setAuthorInput] = useState('');
  const [addRequestStatus, setAddRequestStatus] = useState('idle');
  const dispatch = useDispatch();

  const canSave = [titleInput, authorInput].every(Boolean) && addRequestStatus === 'idle';

  const onSavePostClicked = async () => {
    if (canSave) {
      try {
        setAddRequestStatus('pending');
        await dispatch(addNewBook({
          item_id: uuidv4(), title: titleInput, author: authorInput, category: 'Fiction',
        })).then(() => {
          dispatch(fetchBooks());
        });
        setTitleInput('');
        setAuthorInput('');
      } catch (err) {
        console.error('Failed to save the post: ', err);
      } finally {
        setAddRequestStatus('idle');
      }
    }
  };

  return (
    <>
      <h1>Add new book</h1>
      <input type="text" name="title" value={titleInput} onInput={(e) => setTitleInput(e.target.value)} />
      <input type="text" name="author" value={authorInput} onInput={(e) => setAuthorInput(e.target.value)} />
      <button
        onClick={onSavePostClicked}
        type="submit"
      >
        Submit
      </button>
    </>
  );
};

export default Form;
