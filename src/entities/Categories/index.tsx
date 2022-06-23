import React, { FC } from 'react';
import style from './categories.module.scss';

const Categories: FC = () => {
  const categoriesArray: Array<string> = [
    'Show All',
    'Design',
    'Branding',
    'Illustration',
    'Motion',
  ];
 const handlerChooseCat = () => {
  
 }

  return (
    <div className={style.container}>
      <ul>
        {categoriesArray.map((category: string) => {
          return (
            <li key={`${category}i`}>
              <button type="button" className={style.list_item} onClick={() => handlerChooseCat()}>
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
