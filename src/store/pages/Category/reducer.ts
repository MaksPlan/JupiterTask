import { IImgHolder } from '../../../interfaces/IImgHolder';
import { IPageState } from '../Cards/interface';

const initialState: IPageState = {
  cards: [],
};

export const categoryReducer = (state: IImgHolder[], action: any) => {
  let cards = [];
  switch (action.type) {
    case 'Design':
      cards = state.filter((obj) => obj.category === 'Design');
      return { ...state, cards };
    case 'Branding':
      cards = state.filter((obj) => obj.category === 'Design');
      return { ...state, cards };
    case 'Illustration':
      cards = state.filter((obj) => obj.category === 'Design');
      return { ...state, cards };
    case 'Motion':
      cards = state.filter((obj) => obj.category === 'Design');
      return { ...state, cards };
    default:
      return state;
  }
};
