import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => {
          dispatch(checkStatus());
        }}
        type="button"
      >
        Check Status
      </button>
      <p>{categories}</p>
    </>
  );
};

export default Categories;
