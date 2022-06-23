import React, { FC, useState } from 'react';
import { IImgHolder } from '../../interfaces/IImgHolder';

// interface IProps {
//   id: number;
//   name: string;
//   category: string;
//   path: string;
// }

const Cards = (arr: IImgHolder[]) => {
  const [arrImg, setArrImg] = useState(arr);
  return (
    <>
      {arrImg.forEach((img: IImgHolder) => {
        <div key={`${img.id}+${img.name}`}>
          <img src={img.path} alt={img.name} />
          <button type="button">{img.category}</button>
          <h3>{img.name}</h3>
        </div>;
      })}
    </>
  );
};

export default Cards;
