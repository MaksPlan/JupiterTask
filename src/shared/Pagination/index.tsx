import React from 'react';
import style from './pagination.module.scss';

const Pagination = () => {
  return (
    <button type="button" className={style.button}>
      Load More
    </button>
  );
};

export default Pagination;
