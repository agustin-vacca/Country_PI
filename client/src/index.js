// Dependencias
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';
// Conexion con css
import './index.css';
// Conexion con app 
import App from './App';
// Importo el store que cree
import store from './redux/store';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
