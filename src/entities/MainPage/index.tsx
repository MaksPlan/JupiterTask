import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Categories from '../Categories';
import style from './mainpage.module.scss';
import { imgHolder } from '../../mocks/imgHolder';
import Cards from '../Cards';
import { IImgHolder } from '../../interfaces/IImgHolder';
import { getState } from '../../store/pages/Cards/selector';

const MainPage = () => {
  // const [arr, setArr] = useState(imgHolder);
  // const [cat, setCat] = useState('');
  // const findCat = () => {
  //   let filtredArr: IImgHolder[] = [];
  //   filtredArr = arr.filter((obj) => obj.category === cat);
  //   setArr(filtredArr);
  //   return filtredArr;
  // };

  // const handlerChooseCat = (category: string) => {
  //   setCat(cat);

  //   setArr(() => findCat());
  //   return category;
  // };
  const cards = useSelector(getState);

  return (
    <div className={style.wrapper}>
      <Categories />
      <Cards arr={cards} />
    </div>
  );
};

export default MainPage;
