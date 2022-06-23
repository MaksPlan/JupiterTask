import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import App from './App';
import { IState } from './store/page/MainPage/interfaces';
import { reducerPag } from './store/page/Pagination/reducer';
import { IImgHolder } from './interfaces/IImgHolder';

const store = createStore(reducerPag);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <App />;
  </Provider>
);
