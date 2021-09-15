import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';

import storeFunction from './redux/store/store' // Importamos la store.
import { Provider } from 'react-redux'


const store = storeFunction() 

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



