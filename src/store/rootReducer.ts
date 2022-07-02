import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { cardsReducer } from './pages/Cards/reducer';
import { categoryReducer } from './pages/Category/reducer';

const reducers = {
  category: categoryReducer,
  card: cardsReducer,
};

const rootReducer = combineReducers(reducers);

export const store = configureStore({
  reducer: rootReducer,
});
