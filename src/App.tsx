import React from 'react';
import { Provider } from 'react-redux';
import { Routes } from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles';
import store from './store';
import 'typeface-montserrat';

export const App = () => (
    <Provider store={store}>
      {/*<Routes/>*/}
      <div>routes not working</div>
    </Provider>
);

export default App;
