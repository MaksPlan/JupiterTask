import React, { Children, FC } from 'react';
import MainPage from '../../entities/MainPage';
import Footer from '../../shared/Footer';
import Header from '../../shared/Header';
import style from './pagelayout.module.scss';

interface IPageLayout {
  children: React.ReactNode;
}

const PageLayout: FC<IPageLayout> = () => {
  return (
    <div className={style.page_wrapper}>
      <div className={style.content_wrapper}>
        <div className={style.header_container}>
          <Header />
        </div>
        <div className={style.children_wrapper}>
          <MainPage />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default PageLayout;
