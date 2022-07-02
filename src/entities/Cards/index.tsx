import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { IImgHolder } from '../../interfaces/IImgHolder';
import style from './cards.module.scss';

interface IProps {
  arr: { cards: IImgHolder[] };
}

const Cards: FC<IProps> = ({ arr }) => {
  const { cards } = arr;
  const dispatch = useDispatch();
  console.log('  const { cards } = arr;', cards);
  return (
    <div className={style.container_grid}>
      {cards.map((img: IImgHolder) => {
        return (
          <div key={`${img.id}+${img.name}`} className={style.figure}>
            <figure>
              <img src={img.path} alt={img.name} className={style.img} />
              <figcaption className={style.figcaption}>
                <button
                  type="button"
                  className={style.button}
                  onClick={() => dispatch({ type: `${img.category}` })}>
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
