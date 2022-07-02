import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import style from './categories.module.scss';

interface IProps {
  onChange: (cat: string) => string;
}
const Categories = () => {
  const dispatch = useDispatch();
  const categoriesArray: Array<string> = [
    'Show All',
    'Design',
    'Branding',
    'Illustration',
    'Motion',
  ];

  function changeCategory(name: string) {
    dispatch({ type: name });
  }

  return (
    <div className={style.container}>
      <ul>
        {categoriesArray.map((category: string) => {
          return (
            <li key={`${category}i`}>
              <button
                type="button"
                className={style.list_item}
                onClick={() => changeCategory(`${category}`)}>
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
