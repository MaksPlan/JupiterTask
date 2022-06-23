import React, { FC, useState } from 'react';
import { IImgHolder } from '../../interfaces/IImgHolder';
import style from './cards.module.scss';

interface IProps {
  arr: IImgHolder[];
}

const Cards: FC<IProps> = ({ arr }) => {
  const [arrImg, setArrImg] = useState(arr);

  function handlerSetCategory(i: string) {
    let newArray: IImgHolder[] = [];

    newArray = arrImg.filter((obj) => obj.category === i);

    setArrImg(newArray);
  }

  return (
    <div className={style.container_grid}>
      {arrImg.map((img: IImgHolder) => {
        return (
          <div key={`${img.id}+${img.name}`} className={style.figure}>
            <figure>
              <img src={img.path} alt={img.name} className={style.img} />
              <figcaption className={style.figcaption}>
                <button
                  type="button"
                  className={style.button}
                  onClick={() => handlerSetCategory(`${img.category}`)}>
                  {img.category}
                </button>
                <h3 className={style.title}>{img.name}</h3>
              </figcaption>
            </figure>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
