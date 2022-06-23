import { imgHolder } from '../../../mocks/imgHolder';
import { IState } from '../MainPage/interfaces';

export const reducerPag = (state: IState, action: { type: string }) => {
  let addArrImg = [];
  switch (action.type) {
    case 'add_img':
      addArrImg = imgHolder.map((obj) => {
        // eslint-disable-next-line no-multi-assign
        const result = (obj.name += `${Math.random()}`);
        return result;
      });
      return { ...imgHolder, addArrImg };
    default:
      return state;
  }
};
