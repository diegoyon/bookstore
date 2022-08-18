import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';
import './Categories.css';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <>
      <div className="categories">
        <button
          onClick={() => {
            dispatch(checkStatus());
          }}
          type="button"
        >
          Check Status
        </button>
        <p>{categories}</p>
      </div>
    </>
  );
};

export default Categories;
