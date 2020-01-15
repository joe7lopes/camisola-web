/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import rootReducer from './reducers';
import { Routes } from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';

const App = () => {
  const store = createStore(rootReducer, {}, compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

  return (
    <Provider store={store}>
      <Routes/>
    </Provider>
  );
};

export default App;
