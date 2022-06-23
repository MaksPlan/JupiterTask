import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import style from './pagination.module.scss';

const Pagination = () => {
  const dispach: { type: string } = useDispatch();
  const arr = useSelector((state) => state);

  const addIMG = () => {
    return dispach({ type: 'add_img' });
  };
  return (
    <button type="button" className={style.button} onClick={() => addIMG()}>
      Load More
    </button>
  );
};

export default Pagination;
