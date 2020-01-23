import React from 'react';
import { Provider } from 'react-redux';
import { Routes } from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles';
import store from './store';
import 'typeface-montserrat';

export const App = () => (
    <Provider store={store}>
      <Routes/>
    </Provider>
);

export default App;
