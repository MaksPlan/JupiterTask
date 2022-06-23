import { IImgHolder } from '../../../interfaces/IImgHolder';
import { imgHolder } from '../../../mocks/imgHolder';
import { IState } from '../MainPage/interfaces';

export const reducer = (state: IState, action: { type: string }) => {
  let newArr: IImgHolder[] = imgHolder;
  switch (action.type) {
    case 'Design':
      newArr = imgHolder.filter((obj) => obj.category === 'Design');
      return { ...state, newArr };
    case 'Branding':
      newArr = imgHolder.filter((obj) => obj.category === 'Branding');
      return { ...state, newArr };
    case 'Illustration':
      newArr = imgHolder.filter((obj) => obj.category === 'Illustration');
      return { ...state, newArr };
    case 'Motion':
      newArr = imgHolder.filter((obj) => obj.category === 'Motion');
      return { ...state, newArr };
    default:
      return state;
  }
};
