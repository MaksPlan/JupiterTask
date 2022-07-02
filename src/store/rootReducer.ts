import { configureStore } from '@reduxjs/toolkit';
import { cardsReducer } from './pages/Cards/reducer';

export const store = configureStore({
  reducer: cardsReducer,
});
