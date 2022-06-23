import React, { FC } from 'react';
import style from './categories.module.scss';

interface IProps {
  onChange: (cat: string) => string;
}
const Categories = ({ onChange }: IProps) => {
  const categoriesArray: Array<string> = [
    'Show All',
    'Design',
    'Branding',
    'Illustration',
    'Motion',
  ];
  const handlerChooseCat = (cat: string) => {
    onChange(cat);
  };

  return (
    <div className={style.container}>
      <ul>
        {categoriesArray.map((category: string) => {
          return (
            <li key={`${category}i`}>
              <button
                type="button"
                className={style.list_item}
                onClick={() => handlerChooseCat(`${category}`)}>
                {category}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
