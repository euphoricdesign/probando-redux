import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';

import storeFunction from './redux/store' // Importamos la store.
import { Provider } from 'react-redux'

// Referenciamos la store que vamos a utilizar.
const store = storeFunction() 

// Nuestro sigiente paso es conectar la store a nuestro proyecto. Para utilizarla solo vamos a usar el puente, que ya instalamos, react-redux.
// react-redux tiene un paquete muy interesante que se llama Provider. Este paquete es utilizado para englobar a todo el proyecto.
// Provider recibe una propiedad: store -> Lo que creamos arriba.

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// Ahora vamos a verificar si ya tenemos la store funcionando. Para corroborarlo vamos a App.js.


