import React from 'react';
import Pagination from '../Pagination';
import style from './footer.module.scss';

const Footer = () => {
  return (
    <div className={style.footer}>
      <Pagination />;
    </div>
  );
};

export default Footer;
