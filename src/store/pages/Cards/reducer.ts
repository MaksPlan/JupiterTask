import { imgHolder } from '../../../mocks/imgHolder';

const initialState = {
  cards: imgHolder,
};

export const cardsReducer = (state = initialState, action: any) => {
  let cards = [];
  switch (action.type) {
    case 'Design':
      cards = state.cards.filter((obj) => obj.category === 'Design');
      return { ...state, cards };
    case 'Branding':
      cards = state.cards.filter((obj) => obj.category === 'Branding');
      return { ...state, cards };
    case 'Illustration':
      cards = state.cards.filter((obj) => obj.category === 'Illustration');
      return { ...state, cards };
    case 'Motion':
      cards = state.cards.filter((obj) => obj.category === 'Motion');
      return { ...state, cards };
    default:
      return { ...state, cards: imgHolder };
  }
};
