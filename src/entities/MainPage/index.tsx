import React, { useState } from 'react';
import Categories from '../Categories';
import style from './mainpage.module.scss';
import { imgHolder } from '../../mocks/imgHolder';
import Cards from '../Cards';
import { IImgHolder } from '../../interfaces/IImgHolder';

const MainPage = () => {
  const [arr, setArr] = useState(imgHolder);
  const [cat, setCat] = useState('');
  const findCat = () => {
    let filtredArr: IImgHolder[] = [];
    filtredArr = arr.filter((obj) => obj.category === cat);
    setArr(filtredArr);
    return filtredArr;
  };

  const handlerChooseCat = (category: string) => {
    setCat(cat);

    setArr(() => findCat());
    return category;
  };

  return (
    <div className={style.wrapper}>
      <Categories onChange={handlerChooseCat} />
      <Cards arr={arr} />
      {/* {imgHolder.forEach((img: IImgHolder) => ( {
         const {id, name, category, path} = img;
        return <Cards id={id} name={name} category={category} path={path} />;
      };      
      ))} */}
    </div>
  );
};

export default MainPage;
