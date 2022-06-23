import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import App from './App';
import { IImgHolder } from './interfaces/IImgHolder';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
