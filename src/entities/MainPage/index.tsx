import React from 'react';
import Categories from '../Categories';
import style from './mainpage.module.scss';
import { imgHolder } from '../../mocks/imgHolder';
import Cards from '../Cards';

const MainPage = () => {
  return (
    <div className={style.wrapper}>
      <Categories />
      <Cards arr={imgHolder} />
      {/* {imgHolder.forEach((img: IImgHolder) => ( {
         const {id, name, category, path} = img;
        return <Cards id={id} name={name} category={category} path={path} />;
      };      
      ))} */}
    </div>
  );
};

export default MainPage;
